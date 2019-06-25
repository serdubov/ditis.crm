<?

$name=strip_tags($_POST['name']);
$phone=strip_tags($_POST['phone']);
$mail=strip_tags($_POST['mail']);
$comment=strip_tags($_POST['comment']);
$domain = $_SERVER['SERVER_NAME'];


function executeHook($params) {
    $queryUrl = 'https://ditis.bitrix24.ru/rest/127/2n8a43u3cm5mjwyr/batch.json';
    $queryData = http_build_query($params);
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_POST => 1,
        CURLOPT_HEADER => 0,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $queryUrl,
        CURLOPT_POSTFIELDS => $queryData,
    ));
    $result = curl_exec($curl);
    curl_close($curl);
    return json_decode($result, true);
}

function createLead($name, $phone, $mail, $comment, $domain, $assignedById){
    $batch=array();
    $res='';
    $method="crm.lead.add";
    for ($i=0; $i<1; $i++){
        $batch['cmd_'.$i]=$method.'?'.http_build_query(
            array(
                "fields" => array(
                    "TITLE"=>"С сайта $domain - $name", 
                    "NAME"=>$name,
                    "OPENED"=>"Y", 
                    "ASSIGNED_BY_ID"=>$assignedById,
                    "PHONE" => array(
                        array("VALUE" => $phone, "VALUE_TYPE" => "WORK" )
                    ),
                    "EMAIL" => array(
                      array("VALUE" => $mail, "VALUE_TYPE" => "WORK" )
                    ),
                    "COMMENTS" => $comment
                )
            )    
        );    
        $res .= '>>> '.print_r(executeHook(array('cmd'=>$batch)), true);            
        $batch = array();
    }
}

createLead($name, $phone, $mail, $comment, $domain, 119);

?>
