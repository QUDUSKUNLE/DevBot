module.exports = {
  first_action: {
    "attachments": [
      {
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "plain_text",
              "text": "Hello, how are you doing?",
              "emoji": true
            },
            "accessory": {
              "type": "static_select",
              "placeholder": {
                "type": "plain_text",
                "text": "Select",
                "emoji": true
              },
              "options": [
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Doing Well",
                    "emoji": true
                  },
                  "value": "value-0"
                },
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Not Bad",
                    "emoji": true
                  },
                  "value": "value-1"
                },
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Neutral",
                    "emoji": true
                  },
                  "value": "value-2"
                }
              ],
              "action_id": "static_select-action"
            }
          }
        ]
      }
    ]
  },
  second_action: {
    "attachments": [
      {
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "plain_text",
              "text": "When are you free this week for a work?",
              "emoji": true
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "datepicker",
                "initial_date": "1990-04-28",
                "placeholder": {
                  "type": "plain_text",
                  "text": "Select a date",
                  "emoji": true
                },
                // "action_id": "actionId-1"
              },
              {
                "type": "timepicker",
                "initial_time": "13:37",
                "placeholder": {
                  "type": "plain_text",
                  "text": "Select time",
                  "emoji": true
                },
                // "action_id": "actionId-2"
              }
            ]
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "datepicker",
                "initial_date": "1990-04-28",
                "placeholder": {
                  "type": "plain_text",
                  "text": "Select a date",
                  "emoji": true
                },
                // "action_id": "actionId-3"
              },
              {
                "type": "timepicker",
                "initial_time": "13:37",
                "placeholder": {
                  "type": "plain_text",
                  "text": "Select time",
                  "emoji": true
                },
                // "action_id": "actionId-4"
              }
            ]
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Submit",
                  "emoji": true
                },
                "value": "click_me_123",
                "action_id": "submit_action"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Cancel",
                  "emoji": true
                },
                "value": "click_me_123",
                "action_id": "cancel_action"
              }
            ]
          }
        ]
      }
    ]
  },
  third_action: {
    "attachments": [
      {
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "plain_text",
              "text": "What are your favorite hobbies?",
              "emoji": true
            },
            "accessory": {
              "action_id": "multi_select",
              "type": "multi_static_select",
              "placeholder": {
                "type": "plain_text",
                "text": "Select items"
              },
              "options": [
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Football"
                  },
                  "value": "football"
                },
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Music"
                  },
                  "value": "music"
                },
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Sleep"
                  },
                  "value": "sleep"
                },
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Movies"
                  },
                  "value": "movies"
                },
                {
                  "text": {
                    "type": "plain_text",
                    "text": "Basketball"
                  },
                  "value": "basketball"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  fourth_action: {
    "attachments": [
      {
        "color": "#f2c744",
        "blocks": [
          {
            "type": "input",
            "block_id": "input123",
            "label": {
              "type": "plain_text",
              "text": "What are the first 3 digits on the number scale?"
            },
            "element": {
              "type": "plain_text_input",
              "action_id": "plain_input",
              "placeholder": {
                "type": "plain_text",
                "text": "Enter some plain text"
              }
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Submit",
                  "emoji": true
                },
                "value": "click_me_1",
                "action_id": "submit_button"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Submit",
                  "emoji": true
                },
                "value": "click_me_2",
                "action_id": "cancel_button"
              }
            ]
          }
        ]
      }
    ]
  },
  five_action: {
    "attachments": [
      {
        "blocks": [
          {
            "type": "input",
            "block_id": "input123",
            "label": {
              "type": "plain_text",
              "text": "What are the first 3 digits on the number scale?"
            },
            "element": {
              "type": "plain_text_input",
              "action_id": "plain_input",
              "placeholder": {
                "type": "plain_text",
                "text": "Enter some plain text"
              }
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Submit",
                  "emoji": true
                },
                "value": "click_me_123",
                "action_id": "text_submit"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Cancel",
                  "emoji": true
                },
                "value": "click_me_123",
                "action_id": "text_cancel"
              }
            ]
          }
        ]
      }
    ]
  }  
}
