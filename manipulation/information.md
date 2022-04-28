<div align="center">
  <h1>
    <strong> 
      Manipulation body
    </strong>
  </h1>
</div>

<div>

  ##  Group & Subgroup :bookmark_tabs:
  
  <p>
    The main idea to create this solutions is order the response into group and it respects subgroups.
  </p>

  > Letting only the necessary information!
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

## Files 📂
### :arrow_right_hook: [fieldsGroup.js][group&subgroup-js]
### :arrow_right_hook: [bodyGroup.json][bodyGroup-json]


<!--------------------------------- Files Links ------------------------------->
[group&subgroup-js]:group&subgroup/fieldsGroup.js
[bodyGroup-json]:group&subgroup/bodyGroup.json
