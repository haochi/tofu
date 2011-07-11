function tofu(template, values) {
  return template.replace(/{ *([^} ]+) *}/g, function(value, match) {
    value = values;
    match.replace(/[^.]+/g, function(match) {
      value = value[match];
    });
    return value;
  });
}
