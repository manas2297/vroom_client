const rules = {
  name: { regex : /^[a-zA-Z0-9@#*()_]*$/},
  room : { regex: /^[a-zA-Z0-9]{2,20}$/ }
}

export default rules;