var dd = {
  content: [
    {
      style: {
        margin: [0, 5, 0, 15],
      },
      table: {
        body: [
          [
            {
              text: "1.",
              bold: true,
            },
            {
              text: "Please describe your leadership/management strengths as manager.",
              bold: true,
            },
          ],
          ["", "ID_leadershipSkills"],
          [
            {
              text: "2.",
              bold: true,
            },
            {
              text: "Every leader/manager has opportunities for growth and improvement. What are the management and/or leadership skills in which you could improve?",
              bold: true,
            },
          ],
          ["", "ID_leadershipSkillsForImprovement"],
          [
            {
              text: "3.",
              bold: true,
            },
            {
              text: "What are your personal career goals in the organization?",
              bold: true,
            },
          ],
          ["", "ID_personalCareerGoals"],
          [
            {
              text: "4.",
              bold: true,
            },
            {
              text: "What are the one-year measurable goals($, #, %, etc) in your area of responsibility?",
              bold: true,
            },
          ],
          ["", "ID_oneYearGoal"],
          [
            {
              text: "5.",
              bold: true,
            },
            {
              text: "What are your short term measurable department goals($,#,%, etc.) that can be achieved within next 30 to 45 days?",
              bold: true,
            },
          ],
          ["", "ID_shortTermGoal"],

          [
            {
              text: "6.",
              bold: true,
            },
            {
              text: "What do you believe are the significant challenges you must resolve in order to achieve the above goals?",
              bold: true,
            },
          ],
          ["", "ID_challenges"],
          [
            {
              text: "7.",
              bold: true,
            },
            {
              text: "What are your main COMMUNICATING challenges(e.g., style, effectiveness, frequency, internal, external,etc.)?",
              bold: true,
            },
          ],
          ["", "ID_comChallenges"],
          [
            {
              text: "8.",
              bold: true,
            },
            {
              text: "What are your main PLANNING challenges(e.g., no formal planning, unclear goals, projects, etc.)?",
              bold: true,
            },
          ],
          ["", "ID_planChallenges"],
          [
            {
              text: "9.",
              bold: true,
            },
            {
              text: "What are your main ORGANIZING challenges(e.g., personal organization, availability of supplies, equipment, financial resources, time, organizational structure,etc.)?",
              bold: true,
            },
          ],
          ["", "ID_orgChallenges"],
          [
            {
              text: "10.",
              bold: true,
            },
            {
              text: "What are your main STAFFING challenges(e.g., recruiting, selecting the right people, training, development, retaining, etc.)?",
              bold: true,
            },
          ],
          ["", "ID_staffChallenges"],
          [
            {
              text: "11.",
              bold: true,
            },
            {
              text: "What are your main CONTROLLING challenges(e.g., accountability, follow-through, taking corrective actions, cost and inventory control, productivity, quality, etc.)?",
              bold: true,
            },
          ],
          ["", "ID_contChallenges"],
          [
            {
              text: "12.",
              bold: true,
            },
            {
              text: "What are your main LEADING challenges(e.g., clear vision, motivation, teamwork, initiating action, innovation, commitment to team goals, etc.)?",
              bold: true,
            },
          ],
          ["", "ID_leadChallenges"],
          [
            {
              text: "13.",
              bold: true,
            },
            {
              text: "What do you expect to gain from this management process? How will you know when those expectations have been met?",
              bold: true,
            },
          ],
          ["", "ID_expectation"],
        ],
      },
      layout: {
        hLineColor: function (rowIndex, node, columnIndex) {
          if (rowIndex === node.table.body.length) {
            return "#FFFFFF";
          } else if (rowIndex % 2 === 0) {
            return "#000000";
          } else {
            return "#FFFFFF";
          }
        },
        vLineColor: function (i, node) {
          return "white";
        },
      },
    },
  ],

  styles: {
    table1: {
      margin: [0, 5, 0, 15],
    },
  },
};
