// const fs = require('fs');

const tools = {
  "Tools":
  [
    {
      "toolId": "GitHub",
      "actions": ["postmesage", "read", "Likemessage", "edit", "share"],
      "activityEvents": ["newannouncement", "like", "remove"],
      "domain": "doctor.ny"
    },
    {
      "toolId": "quora",
      "actions": ["postmesage", "read", "Likemessage", "edit", "share"],
      "activityEvents": ["newannouncement", "like", "remove"],
      "domain": "doctor.ny"
    },
    {
      "toolId": "WeMedUp",
      "actions": ["postmesage", "read", "Likemessage", "edit", "share"],
      "activityEvents": ["newannouncement", "like", "remove"],
      "domain": "doctor.ny"
    }
  ]
}
function getTool(domain) {
  return tools;
};
module.exports = {
  getTool: getTool
};

