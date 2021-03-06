<div align="center">
  <h1>
    <strong> Manipulation body </strong>
  </h1>
</div>

<div>
  
  <h2> Group & Subgroup ๐ </h2> 
  
  <p>
    The solution is to group the <b>response body</b> inside groups and subgroups.
  </p>

  <p>
    Every main group that has the same name, must create subgroups and add them.
  </p>

  > Keeping the only necessary information organizedโ 
</div>

---

<div>
  <img src="../others/js-icon.png" alt="Javascript Icon" align="right" width="50px" height="50px">

  ## Code

  ```
  try {
    var body = JSON.parse($call.response.getBody().getString('utf-8'));

    newBody = groupResponse(body);

    $call.response.getBody().setString(JSON.stringify(newBody), 'UTF-8');
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
  ```
</div>

---

<div>

  <h2> Demo ๐ </h2> 
  
  * <h3>
      <strong> Request </strong>
    </h3>
  
  ```
  GET https://api-treinamento.sensedia.com/repository/v1/products
  ```

  * <h4>
      <strong> Payload </strong>
    </h4>

  ```
    {}
  ```

  * <h4>
      <strong> Headers </strong>
    </h4>

  | Key| Value |
  | :--- | --------- |
  | client_id | `token` |
  | access_token | `token` |

  >  Protected by oAuth 2.0 :lock:

</div>

---
## Files ๐
### :arrow_right_hook: [fieldsGroup.js][group&subgroup-js]
### :arrow_right_hook: [bodyGroup.json][bodyGroup-json]


<!--------------------------------- Files Links ------------------------------->
[group&subgroup-js]:group&subgroup/fieldsGroup.js
[bodyGroup-json]:group&subgroup/bodyGroup.json
