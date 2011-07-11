function tofu(template, values){
  return template.replace(/{ *([^} ]+) *}/g, function(a, match){
    var levels = match.split("."),
        item = values;
    for(var i=0;i<levels.length;){
      item = item[levels[i++]];
    }
    return item;
  });
}
