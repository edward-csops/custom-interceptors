try {
  var body = JSON.parse($call.response.getBody().getString('utf-8'));
  $console.debug('body', body);

  newBody = groupResponse(body);
  $console.debug('newBody', newBody);

  $call.response.getBody().setString(JSON.stringify(newBody), 'UTF-8');
} catch (e) {
  $call.tracer.trace(
    'Exception message => ' + e.message + ' <= in line => ' + e.stack
  );
  $console.debug('>sensedia => Exception', e);
  throw e;
}

function stopFlow(code, body) {
  $call.decision.setAccept(false);
  $call.stopFlow = true;
  $call.tracer.trace('body', body);
  $call.response = new com.sensedia.interceptor.externaljar.dto.ApiResponse();
  $call.response.setStatus(code);
  if (body) {
    $call.response.setHeader('Content-Type', 'application/json');
  }
  $call.response.getBody().setString(String(body || ''), 'utf-8');
}

function groupResponse(body) {
  var newBody = body.map(function (el) {
    var grupo_digital = el.grupo_digital;
    var subgrupos = JSON.parse(el.subgrupos.value);

    var obj = {
      grupo_digital: grupo_digital,
      subgrupos: subgrupos,
    };

    return obj;
  });

  return newBody;
}
