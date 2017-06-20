  const coreActivity = {
      "community" : [
    {"value": "Professional", "viewValue": "Professional", "tool": "Forum" },
    {"value": "Travel", "viewValue": "Travel", "tool": "quora"},
    {"value": "Arts", "viewValue": "Arts", "tool": "stackoverflow"},
    {"value": "Technology", "viewValue": "Technology", "tool": "quora"},
    {"value": "Business", "viewValue": "Business", "tool": "Forum"},
    {"value": "Science", "viewValue": "Science", "tool": "quora"},
    {"value": "Education", "viewValue": "Education", "tool": "quora"}
  ]
};


    // visibility = [
    //   {"value": "Public", "viewValue": "Public"},
    //   {"value": "Private", "viewValue": "Private"},
    //   {"value": "Moderate", "viewValue": "Moderate"}
    // ];

    function getcommunity(req, res) {
       res.status(200).json(coreActivity);
    };

    module.exports = {
        getcommunity: getcommunity
    };

module.exports = {
  getUserCommunity,
};
