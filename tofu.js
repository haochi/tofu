function tofu(template, values){
  return template.replace(/{\s*([\w\.]+)\s*}/g, function(a, match){
    var levels = match.split("."),
        item = values;
    for(var i=0;i<levels.length;i++){
      item = item[levels[i]];
    }
    return item;
  });
}
