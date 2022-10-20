var i=Object.defineProperty;var r=(o,a)=>i(o,"name",{value:a,configurable:!0});import{j as l}from"./jsx-runtime.c8babd87.js";import{P as n}from"./index.3569d3cd.js";import{a as s}from"./error-bar.a80e5657.js";/* empty css              */import"./iframe.c92dec21.js";import"./Button.61f1ab64.js";import"./index.bd9168c1.js";const d=`dd = 
{
  footer: {
    columns: [
      {
        text: "(please keep a copy of this form)\\n 1035572(4) Updated: ID_DATE",
        alignment: "left",
        marginLeft: 10,
        fontSize: 8,
      },
      {
        text: "(over)\\nCopyright\xA9 2012 Management Action Programs, Inc.  All rights reserved.",
        alignment: "right",
        marginRight: 10,
        fontSize: 8,
      },
    ],
  },
  content: [
    {
      layout: "noBorders",
      table: {
        widths: [250, "auto"],
        body: [
          [
            {
              image: "icon",
              alignment: "center",
              width: 125,
            },
            {
              layout: "noBorders",
              fontSize: 9,
              table: {
                body: [
                  [{ style: "header_left", text: "Participant:" }, "ID_NAME"],
                  [{ style: "header_left", text: "Organization:" }, "ID_ORG"],
                  [{ style: "header_left", text: "Workshop Date:" }, "ID_DATE"],
                  [{ style: "header_left", text: "Due Date:" }, "ID_DUE"],
                  [
                    { style: "header_left", text: "Return Fax:" },
                    "(818) 981-2717",
                  ],
                ],
              },
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: ["*", 20],
        body: [
          [
            {
              fillColor: "#092B58",
              color: "white",
              text: "PARTICIPANT'S QUESTIONNAIRE",
            },
            {
              alignment: "center",
              text: "Q1",
              color: "#092B58",
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      table: {
        body: [
          [
            { text: "1.", bold: true },
            {
              text: "Please describe your leadership/management strengths as manager.",
              bold: true,
            },
          ],
          ["", "ID_LEADERSHIP_SKILLS"],
          [
            { text: "2.", bold: true },
            {
              text: "Every leader/manager has opportunities for growth and improvement. What are the management and/or leadership skills in which you could improve?",
              bold: true,
            },
          ],
          ["", "ID_LS_FOR_IMPROVEMENTS"],
          [
            { text: "3.", bold: true },
            {
              text: "What are your personal career goals in the organization?",
              bold: true,
            },
          ],
          ["", "ID_P_CAREER_GOALS"],
          [
            { text: "4.", bold: true },
            {
              text: "What are the one-year measurable goals($, #, %, etc) in your area of responsibility?",
              bold: true,
            },
          ],
          ["", "ID_ONE_YEAR_GOAL"],
          [
            { text: "5.", bold: true },
            {
              text: "What are your short term measurable department goals($,#,%, etc.) that can be achieved within next 30 to 45 days?",
              bold: true,
            },
          ],
          ["", "ID_SHORT_TERM_GOALS"],

          [
            { text: "6.", bold: true },
            {
              text: "What do you believe are the significant challenges you must resolve in order to achieve the above goals?",
              bold: true,
            },
          ],
          ["", "ID_CHALLENGES"],
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
        vLineWidth: function (i) {
          return 0;
        },
      },
    },
    {
      pageBreak: "before",
      layout: "noBorders",
      table: {
        widths: [250, "auto"],
        body: [
          [
            {
              image: "icon",
              alignment: "center",
              width: 125,
            },
            {
              layout: "noBorders",
              fontSize: 9,
              table: {
                body: [
                  [{ style: "header_left", text: "Participant:" }, "ID_NAME"],
                  [{ style: "header_left", text: "Organization:" }, "ID_ORG"],
                  [{ style: "header_left", text: "Workshop Date:" }, "ID_DATE"],
                  [{ style: "header_left", text: "Due Date:" }, "ID_DUE"],
                  [
                    { style: "header_left", text: "Return Fax:" },
                    "(818) 981-2717",
                  ],
                ],
              },
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: "\\nBACK ",
    },
    {
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: [20, "*"],
        body: [
          [
            {
              alignment: "center",
              text: "Q1",
              color: "#092B58",
            },
            {
              fillColor: "#092B58",
              color: "white",
              text: "PARTICIPANT'S QUESTIONNAIRE",
            },
          ],
        ],
      },
    },
    {
      table: {
        body: [
          [
            { text: "7.", bold: true },
            {
              text: "What are your main COMMUNICATING challenges(e.g., style, effectiveness, frequency, internal, external,etc.)?",
              bold: true,
            },
          ],
          ["", "ID_COM_CHALLENGES"],
          [
            { text: "8.", bold: true },
            {
              text: "What are your main PLANNING challenges(e.g., no formal planning, unclear goals, projects, etc.)?",
              bold: true,
            },
          ],
          ["", "ID_PLAN_CHALLENGES"],
          [
            { text: "9.", bold: true },
            {
              text: "What are your main ORGANIZING challenges(e.g., personal organization, availability of supplies, equipment, financial resources, time, organizational structure,etc.)?",
              bold: true,
            },
          ],
          ["", "ID_ORG_CHALLENGES"],
          [
            { text: "10.", bold: true },
            {
              text: "What are your main STAFFING challenges(e.g., recruiting, selecting the right people, training, development, retaining, etc.)?",
              bold: true,
            },
          ],
          ["", "ID_STAFF_CHALLENGES"],
          [
            { text: "11.", bold: true },
            {
              text: "What are your main CONTROLLING challenges(e.g., accountability, follow-through, taking corrective actions, cost and inventory control, productivity, quality, etc.)?",
              bold: true,
            },
          ],
          ["", "ID_CONTROL_CHALLENGES"],
          [
            { text: "12.", bold: true },
            {
              text: "What are your main LEADING challenges(e.g., clear vision, motivation, teamwork, initiating action, innovation, commitment to team goals, etc.)?",
              bold: true,
            },
          ],
          ["", "ID_LEAD_CHALLENGES"],
          [
            { text: "13.", bold: true },
            {
              text: "What do you expect to gain from this management process? How will you know when those expectations have been met?",
              bold: true,
            },
          ],
          ["", "ID_EXPECTATION"],
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
        vLineWidth: function (i) {
          return 0;
        },
      },
    },
  ],

  styles: {
    header_left: {
      alignment: "right",
    },
  },
  images: {
    icon: "url('data:image/png;base64,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')",
  }
}`,y=`dd = 
{
		footer: {
	    fontSize: 7,
	    layout: 'noBorders',
	    table: { 
	        widths: [30, '*', '*', 30],
	        body: [
	                ['','',{
	                    bold: true, 
	                    alignment: 'right', 
	                    fontSize: 9,
	                    text: '(Please keep a copy of this form)'
	                    
	                },''],
	                ['',{
	                    text:'1035629(3) Updated: Tue Jul 19 00:35:38 2022'
	                    
	                },
	                {
	                    alignment: 'right', 
	                    text:'Copyright \xA9 2012 Management Action Programs, Inc. All right reserved.'
	                },'']
	            ]
	    }
	},
	content: [
	    {
	        layout: 'noBorders',
	        table: {
	            widths: [280, 'auto'],
	            body: [
	                [
	                    {
	                        image: 'icon',
	                        alignment: 'left',
	                        width: 150,
	                    },
	                    {
	                        layout: 'noBorders',
	                        fontSize: 9,
	                        table: {
	                            body:[
	                                [{style:'header_left',text:'Participant:'},'ID_name'],
	                                [{style:'header_left',text:'Organization:'},'ID_org'],
	                                [{style:'header_left',text:'Workshop Date:'},'ID_date'],
	                                [{style:'header_left',text:'Due Date:'},'ID_due'],
	                                [{style:'header_left',text:'Return Fax:'},'(818) 981-2717']
	                            ]
	                        }
	                    }
	                ]
	            ]
	        }
	    },
	    {
	        fontSize: 10,
	        bold: true,
	        text: ' '
	    },
	    {
	        fontSize: 13,
	        bold: true,
	        headerRows: 1,
	        table:{
	            widths: ["*",20],
	            body: [
	                [
	                    {
	                        fillColor: 'black',
	                        color: 'white',
	                        text: 'MANAGEMENT AND LEADERSHIP INVENTORY - PARTICIPANT'
	                    },
	                    {
	                        alignment: 'center',
	                        text:"Q2"
	                    },
	                ]
	            ]
	        }
	        
	    },
	    { text: '\\n'},
	    {
	      style: 'body', 
	      table: {
	          widths: ['*',100],
	          body:[
	              [
	                  {
	                      border: [false,false,false,false],
	                      alignment: 'left',
	                      text: 'Please check the numbers which best describe your management and leadership abilities, 1 being poor, 9 being excellent. Your supervising manager or partner will complete the same form and the comparative results will be used as coaching tool. Please be candid and frank.'
	                  },
	                  {
	                      border: [true,true,true,true],
	                      layout: 'noBorders',
	                      italics: true,
	                      fontSize: 11,
	                      table:{
	                          widths: ['*'],
	                          body: [
	                              [{text: 'Appraised by:'}],
	                              [{bold: true, text: 'Self'}]
	                            ]
	                      }
	                  }
	            ]]
	      }
	    },
	    { text: '\\n'},
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Communicating Abilities'
	                        },
	                        {
	                            alignment: 'right',
                                bold: true,
	                            text: 'Appraised by:'
	                        },
	                        {
	                            italics: true,
	                            alignment: 'left',
	                            text: 'A, J, Wilson'
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Ability to convey meaning and obtain understanding)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Speaking one-to-one'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Speaking in groups'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Writing skills'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Listening'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Relating to supervising manager / partner'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Relating to peers'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Relating to direct reports'},'','','','','','','','X',''],
	            ]
	        }
	    },
	    { text: '\\n'},
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Planning Abilities'
	                        },
	                        {
	                            alignment: 'right',
	                            fontSize: 10,
	                            text: ''
	                        },
	                        {
	                            bold: true,
	                            italics: true,
	                            alignment: 'left',
	                            text: ''
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Ability to develop goals and strategies for future action)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Foreseeing problems and opportunities'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Analyzing problems and facts'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Setting clear, measurable goals'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Developing strategies'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Scheduling work and planning time'},'','','','','','','','X',''],
	            ]
	        }
	    },
	    { text: '\\n'},
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Organizing Abilities'
	                        },
	                        {
	                            alignment: 'right',
	                            fontSize: 10,
	                            text: ''
	                        },
	                        {
	                            bold: true,
	                            italics: true,
	                            alignment: 'left',
	                            text: ''
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Ability to align work and resources productively in relation and goals)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Allocating resources'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Coordinating the work of others'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Sorting the vital from the less important'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Delegating'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Each team member understands job responsibilities'},'','','','','','','','X',''],
	            ]
	        }
	    },
	    { text: '\\n'},
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Staffing Abilities'
	                        },
	                        {
	                            alignment: 'right',
	                            fontSize: 10,
	                            text: ''
	                        },
	                        {
	                            bold: true,
	                            italics: true,
	                            alignment: 'left',
	                            text: ''
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Ability to recruit, select, develop and retain people)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Aligning staffing needs with company goals'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Recruiting'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Selecting the right people'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Providing training opportunities'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Retaining people'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Developing potential in people'},'','','','','','','','X',''],
	            ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        table: {
	            widths: [280, 'auto'],
	            body: [
	                [
	                    {
	                        image: 'icon',
	                        alignment: 'left',
	                        width: 150,
	                    },
	                    {
	                        layout: 'noBorders',
	                        fontSize: 9,
	                        table: {
	                            body:[
	                                [{style:'header_left',text:'Participant:'},'ID_name'],
	                                [{style:'header_left',text:'Organization:'},'ID_org'],
	                                [{style:'header_left',text:'Workshop Date:'},'ID_date'],
	                                [{style:'header_left',text:'Due Date:'},'ID_due'],
	                                [{style:'header_left',text:'Return Fax:'},'(818) 981-2717']
	                            ]
	                        }
	                    }
	                ]
	            ]
	        }
	    },
	    {
	        fontSize: 10,
	        bold: true,
	        text: 'BACK'
	    },
	    {
	        fontSize: 13,
	        bold: true,
	        headerRows: 1,
	        table:{
	            widths: [20,"*"],
	            body: [
	                [
	                    {
	                        alignment: 'center',
	                        text:"Q2"
	                    },
	                    {
	                        fillColor: 'black',
	                        color: 'white',
	                        text: 'MANAGEMENT AND LEADERSHIP INVENTORY - PARTICIPANT'
	                    }
	                    ]
	            ]
	        }
	        
	    },
	    {
	        text: '\\n'
	    },
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Controlling Abilities'
	                        },
	                        {
	                            alignment: 'right',
	                            fontSize: 10,
	                            text: 'Appraised by:'
	                        },
	                        {
	                            bold: true,
	                            italics: true,
	                            alignment: 'left',
	                            text: 'Self'
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Measuring performance and taking appropiate action)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Setting standards'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Assessing performance'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Following through'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Holding people accountable'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Taking corrective action'},'','','','','','','','X',''],
	            ]
	        }
	    },
	    {
	        text: '\\n'
	    },
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Teamwork Abilities'
	                        },
	                        {
	                            alignment: 'right',
	                            fontSize: 10,
	                            text: ''
	                        },
	                        {
	                            bold: true,
	                            italics: true,
	                            alignment: 'left',
	                            text: ''
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Ability to work together to achieve common goals)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Causes a high level of teamwork'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Commits self to team goals'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: "Gives support to others' programs"},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Coordinates with others to achieve goals'},'','','','','','','','X',''],
	            ]
	        }
	    },
	    {
	        text: '\\n'
	    },
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Leader Abilities'
	                        },
	                        {
	                            alignment: 'right',
	                            fontSize: 10,
	                            text: ''
	                        },
	                        {
	                            bold: true,
	                            italics: true,
	                            alignment: 'left',
	                            text: ''
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Ability to inspire people to achieve goals)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Clearly communicates vision and values'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates determination and relentless resolve'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates integrity'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Shows confidence'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Develops trust'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Is an excellent coach and mentor'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Inspires continuous improvement'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates personal humility'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates passion and commitment'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Confronts difficult issues and finds resolution'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Attracts strong people to the organization'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Maintains the focus of the organization'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Each team member has clear, quantifiable goals'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates empathy'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Encourages excellence'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: "Job duties of the team are aligned with the organization's direction"},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Discovers and develops the strengths of others'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Embraces and implements change'},'','','','','','','','X',''],
	            ]
	        }
	    },
	],
	styles: {
	    header_left: {
	        alignment: 'right'
	    },
	    sub_title: {
	        fontSize: 10
	    },
	    sub_sub_title: {
	        fontSize: 8,
	        italics: true,
	    },
	    body: {
	        fontSize: 8,
	        alignment: 'center'
	    },
	    body_table_name: {
	        border: [false, false, false, false],
	        alignment: 'left'
	    }
	    
	},
	
	images: {
	icon: "url('data:image/png;base64,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')"
  }
}`,A=`dd = 
{
	footer: {
fontSize: 7,
layout: 'noBorders',
table: { 
    widths: [30, '*', '*', 30],
    body: [
            ['','',{
                bold: true, 
                alignment: 'right', 
                fontSize: 9,
                text: '(Please keep a copy of this form)'
                
            },''],
            ['',{
                text:'1035629(3) Updated: Tue Jul 19 00:35:38 2022'
                
            },
            {
                alignment: 'right', 
                text:'Copyright \xA9 2012 Management Action Programs, Inc. All right reserved.'
            },'']
        ]
}
},
content: [
{
    layout: 'noBorders',
    table: {
        widths: [280, 'auto'],
        body: [
            [
                {
                    image: 'icon',
                    alignment: 'left',
                    width: 150,
                },
                {
                    layout: 'noBorders',
                    fontSize: 9,
                    table: {
                        body:[
                            [{style:'header_left',text:'Participant:'},'ID_name'],
                            [{style:'header_left',text:'Organization:'},'ID_org'],
                            [{style:'header_left',text:'Workshop Date:'},'ID_date'],
                            [{style:'header_left',text:'Due Date:'},'ID_due'],
                            [{style:'header_left',text:'Return Fax:'},'(818) 981-2717']
                        ]
                    }
                }
            ]
        ]
    }
},
{
    fontSize: 10,
    bold: true,
    text: ' '
},
{
    fontSize: 13,
    bold: true,
    headerRows: 1,
    table:{
        widths: ["*",20],
        body: [
            [
                {
                    fillColor: 'black',
                    color: 'white',
                    text: 'PROFESSIONAL CAREER SUMMARY'
                },
                {
                    alignment: 'center',
                    text:"Q4"
                },
            ]
        ]
    }
    
},
{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]},
{ text: '\\n'},
{
    style: 'body',
    table: {
        widths: [70,'*',50,'*',40,'*',40,'*'],
        body: [
            [
                {text:'Home adress:', border: [true,true,false,true]},
                {text:'71 Acaia ave', border: [false,true,true,true], colSpan: 5, bold: true},
                '','','','',
                {text:'Phone:', border: [true,true,false,true]},
                {text:'', border:[false,true,true,true], bold: true}
            ],[
                {text:'City:', border: [true,true,false,true]},
                {text:'Newport Beach', border: [false,true,true,true], colSpan: 3, bold: true},
                '','',
                {text:'State:', border: [true,true,false,true]},
                {text:'CA', border: [false,true,true,true]}, 
                {text:'Zip code:', border: [true,true,false,true]},
                {text:'90210', border: [false,true,true,true]}
            ],[
                {text:'Marital:', border: [true,true,false,true]},
                {text:'0', border: [false,true,true,true], bold: true},
                {text:'Birth date:', border: [true,true,false,true]},
                {text:'12/12/2012', border: [false,true,true,true], bold: true},
                {text:'Children:', border: [true,true,false,true]},
                {text:'100', border: [false,true,true,true], bold: true},
                {text:'Ages:', border: [true,true,false,true]},
                {text:'1,2,3', border: [false,true,true,true], bold: true}
            ],[
                {text:'Personal email:', border: [true,true,false,true]},
                {text:'me@me.com', border: [false,true,true,true], bold: true, colSpan: 3},
                '','',
                {text:'LinkedIn:', border: [true,true,false,true]},
                {text:'', border: [false,true,true,true], bold: true, colSpan: 3},
                '',''
            ],[
                {text:'Facebook:', border: [true,true,false,true]},
                {text:'', border: [false,true,true,true], bold: true, colSpan: 3},
                '','',
                {text:'', colSpan: 4},'','',''
            ]
        ]
    }
},
{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]},
{
    style: 'body',
    layout: 'noBorders',
    table: {
        body:[
        [''],
        [{text:'Avcational interests and hobbies:', style: 'body_question'}],
        [''],
        [{text:'Fishing, reading, Sleeping', style: 'body_answer'}],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        [{text:'Organizations (social, service, bussiness, or professional) to which you belong:', style: 'body_question'}],
        [''],
        [{text:'None', style: 'body_answer'}],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        [{text:'Periodicals you read:', style: 'body_question'}],
        [''],
        [{text:'Turkeys Specials', style: 'body_answer'}],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        [{text:'Educational background:', style: 'body_question'}],
        [''],
        [{text:'Highly educated', style: 'body_answer'}],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        [{text:'Business or professional seminars taken:', style: 'body_question'}],
        [''],
        [{text:'None', style: 'body_answer'}],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        [{text:'Key advisors:', style: 'body_question'}],
        [''],
        [{text:'Michael Jordan', style: 'body_answer'}],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        [{text:'Employment History', style: 'body_question'}],
        [''],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        ]
    }
},
{
    style: 'body',
    layout: 'noBorders',
    table: {
        widths: [50,'*',80,'*',50,'*'],
        body:[
            [
                {text: 'Employer:',style:'body_question'},{text:'Disney',style:'body_answer'},
                {text: 'From:',style:'body_question'},{text:'1990',style:'body_answer'},
                {text: 'To:',style:'body_question'},{text:'1999',style:'body_answer'},
            ],
            [
                {text: 'Title:',style:'body_question'},{text:'CEO',style:'body_answer'},
                {text: 'Beginning Salary:',style:'body_question'},{text:'190000',style:'body_answer'},
                {text: 'End Salary:',style:'body_question'},{text:'200000',style:'body_answer'},
            ],
            [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}], colSpan: 6}],
            [{text:'', colSpan: 6}],
            [
                {text: 'Employer:',style:'body_question'},{text:'Disney',style:'body_answer'},
                {text: 'From:',style:'body_question'},{text:'1990',style:'body_answer'},
                {text: 'To:',style:'body_question'},{text:'1999',style:'body_answer'},
            ],
            [
                {text: 'Title:',style:'body_question'},{text:'CEO',style:'body_answer'},
                {text: 'Beginning Salary:',style:'body_question'},{text:'190000',style:'body_answer'},
                {text: 'End Salary:',style:'body_question'},{text:'200000',style:'body_answer'},
            ],
            [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}], colSpan: 6}],
            [{text:'', colSpan: 6}],
            [
                {text: 'Employer:',style:'body_question'},{text:'Disney',style:'body_answer'},
                {text: 'From:',style:'body_question'},{text:'1990',style:'body_answer'},
                {text: 'To:',style:'body_question'},{text:'1999',style:'body_answer'},
            ],
            [
                {text: 'Title:',style:'body_question'},{text:'CEO',style:'body_answer'},
                {text: 'Beginning Salary:',style:'body_question'},{text:'190000',style:'body_answer'},
                {text: 'End Salary:',style:'body_question'},{text:'200000',style:'body_answer'},
            ],
            [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}], colSpan: 6}],
            [{text:'', colSpan: 6}],
            [
                {text: 'Employer:',style:'body_question'},{text:'Disney',style:'body_answer'},
                {text: 'From:',style:'body_question'},{text:'1990',style:'body_answer'},
                {text: 'To:',style:'body_question'},{text:'1999',style:'body_answer'},
            ],
            [
                {text: 'Title:',style:'body_question'},{text:'CEO',style:'body_answer'},
                {text: 'Beginning Salary:',style:'body_question'},{text:'190000',style:'body_answer'},
                {text: 'End Salary:',style:'body_question'},{text:'200000',style:'body_answer'},
            ],
            [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}], colSpan: 6}],
            [{text:'', colSpan: 6}],
            [
                {text: 'Employer:',style:'body_question'},{text:'Disney',style:'body_answer'},
                {text: 'From:',style:'body_question'},{text:'1990',style:'body_answer'},
                {text: 'To:',style:'body_question'},{text:'1999',style:'body_answer'},
            ],
            [
                {text: 'Title:',style:'body_question'},{text:'CEO',style:'body_answer'},
                {text: 'Beginning Salary:',style:'body_question'},{text:'190000',style:'body_answer'},
                {text: 'End Salary:',style:'body_question'},{text:'200000',style:'body_answer'},
            ],
            [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}], colSpan: 6}],
            [{text:'', colSpan: 6}],
        ]
    }
}
],
styles: {
header_left: {
    alignment: 'right'
},
sub_title: {
    fontSize: 10
},
sub_sub_title: {
    fontSize: 8,
    italics: true,
},
body: {
    fontSize: 9,
    alignment: 'left'
},
body_table_name: {
    border: [false, false, false, false],
    alignment: 'left'
},
body_question: {
    
},
body_answer: {
    bold: true
}

},

images: {
icon: "url('data:image/png;base64,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')"
}
	
}`,u=`dd = 
{
  footer: {
    columns: [
      {
        text: "(please keep a copy of this form)\\n ID_FORM_NO Updated: ID_DATE",
        alignment: "left",
        marginLeft: 10,
        fontSize: 8,
        bold: true,
      },
      {
        text: "(over)\\nCopyright\xA9 2012 Management Action Programs, Inc.  All rights reserved.",
        alignment: "right",
        marginRight: 10,
        fontSize: 8,
        bold: true,
      },
    ],
  },
  content: [
    {
      layout: "noBorders",
      table: {
        widths: [250, "auto"],
        body: [
          [
            {
              image: "icon",
              alignment: "center",
              width: 125,
            },
            {
              layout: "noBorders",
              fontSize: 9,
              table: {
                body: [
                  [{ style: "header_left", text: "Participant:" }, "ID_NAME"],
                  [{ style: "header_left", text: "Organization:" }, "ID_ORG"],
                  [{ style: "header_left", text: "Workshop Date:" }, "ID_DATE"],
                  [{ style: "header_left", text: "Due Date:" }, "ID_DUE"],
                  [
                    { style: "header_left", text: "Return Fax:" },
                    "(818) 981-2717",
                  ],
                ],
              },
            },
          ],
        ],
      },
    },
    {
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: ["*", 20],
        body: [
          [
            {
              fillColor: "#092B58",
              color: "white",
              text: "KEY OUTSIDE INFLUENCES LIST",
            },
            {
              alignment: "RIGHT",
              text: "Q5",
              color: "#092B58"
            },
          ],
        ],
      },
    },
    {
      text: " ",
    },
    {
      style: {
        margin: [10, 15, 10, 15],
        fontSize: 11,
      },
      layout: {
        vLineWidth: function (i) {
          return 0;
        },
      },
      table: {
        widths: ["*", "*", "*"],

        headerRows: 1,
        body: [
          [
            {
              style: "header_line",
              text: "Name and Position",
            },
            {
              text: "Company Name and Address",
              style: "header_line",
            },
            {
              text: "Email & Phone",
              style: "header_line",
            },
          ],
          [
            {
              text: "1. ID_NAME1\\nID_TITLE1",
              style: "listitem",
            },
            {
              text: "ID_CNAME1\\nID_CADDRESS1",
              style: "listitem",
            },
            {
              text: "ID_EMAIL1\\nID_PHONE1",
              style: "listitem",
            },
          ],
          [
            {
              text: "2. ID_NAME2\\nID_TITLE2",
              style: "listitem",
            },
            {
              text: "ID_CNAME2\\nID_CADDRESS2",
              style: "listitem",
            },
            {
              text: "ID_EMAIL2\\nID_PHONE2",
              style: "listitem",
            },
          ],
          [
            {
              text: "3. ID_NAME3\\nID_TITLE3",
              style: "listitem",
            },
            {
              text: "ID_CNAME3\\nID_CADDRESS3",
              style: "listitem",
            },
            {
              text: "ID_EMAIL3\\nID_PHONE3",
              style: "listitem",
            },
          ],
          [
            {
              text: "4. ID_NAME4\\nID_TITLE4",
              style: "listitem",
            },
            {
              text: "ID_CNAME4\\nID_CADDRESS4",
              style: "listitem",
            },
            {
              text: "ID_EMAIL4\\nID_PHONE4",
              style: "listitem",
            },
          ],
          [
            {
              text: "5. ID_NAME5\\nID_TITLE5",
              style: "listitem",
            },
            {
              text: "ID_CNAME5\\nID_CADDRESS5",
              style: "listitem",
            },
            {
              text: "ID_EMAIL5\\nID_PHONE5",
              style: "listitem",
            },
          ],
          [
            {
              text: "6. ID_NAME6\\nID_TITLE6",
              style: "listitem",
            },
            {
              text: "ID_CNAME6\\nID_CADDRESS6",
              style: "listitem",
            },
            {
              text: "ID_EMAIL6\\nID_PHONE6",
              style: "listitem",
            },
          ],
          [
            {
              text: "7. ID_NAME7\\nID_TITLE7",
              style: "listitem",
            },
            {
              text: "ID_CNAME7\\nID_CADDRESS7",
              style: "listitem",
            },
            {
              text: "ID_EMAIL7\\nID_PHONE7",
              style: "listitem",
            },
          ],
          [
            {
              text: "8. ID_NAME8\\nID_TITLE8",
              style: "listitem",
            },
            {
              text: "ID_CNAME8\\nID_CADDRESS8",
              style: "listitem",
            },
            {
              text: "ID_EMAIL8\\nID_PHONE8",
              style: "listitem",
            },
          ],
          [
            {
              text: "9. ID_NAME9\\nID_TITLE99",
              style: "listitem",
            },
            {
              text: "ID_CNAME9\\nID_CADDRESS9",
              style: "listitem",
            },
            {
              text: "ID_EMAIL9\\nID_PHONE9",
              style: "listitem",
            },
          ],
          [
            {
              text: "10. ID_NAME10\\nID_TITLE10",
              style: "listitem",
            },
            {
              text: "ID_CNAME10\\nID_CADDRESS10",
              style: "listitem",
            },
            {
              text: "ID_EMAIL10\\nID_PHONE10",
              style: "listitem",
            },
          ],
          [
            {
              text: "11. ID_NAME11\\nID_TITLE11",
              style: "listitem",
            },
            {
              text: "ID_CNAME11\\nID_CADDRESS11",
              style: "listitem",
            },
            {
              text: "ID_EMAIL11\\nID_PHONE11",
              style: "listitem",
            },
          ],
          [
            {
              text: "12. ID_NAME12\\nID_TITLE12",
              style: "listitem",
            },
            {
              text: "ID_CNAME12\\nID_CADDRESS12",
              style: "listitem",
            },
            {
              text: "ID_EMAIL12\\nID_PHONE12",
              style: "listitem",
            },
          ],
        ],
      },
    },
  ],
  styles: {
    table1: {
      margin: [0, 5, 0, 15],
    },
    header_left: {
      alignment: "right",
    },
    listitem: {
      lineHeight: 1.2,
    },
    header_line: {
      bold: true,
      color: "#FFFFFF",
      fillColor: "#092B58",
      align: "left",
    },
  },
  images: {
    icon: " url('data:image/png;base64,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')",
  },
};`,b=`dd = {
  footer: {
    columns: [
      {
        text: "ID_FORM_NO Updated: ID_DATE",
        alignment: "left",
        marginLeft: 10,
        fontSize: 8,
        bold: true,
      },
      {
        text: "(over)\\nCopyright \xA9 2012 Management Action Programs, Inc.  All rights reserved.",
        alignment: "right",
        marginRight: 10,
        fontSize: 8,
        bold: true,
      },
    ],
  },
  content: [
    {
      layout: "noBorders",
      table: {
        widths: [250, "auto"],
        body: [
          [
            {
              image: "icon",
              alignment: "center",
              width: 125,
            },
            {
              layout: "noBorders",
              fontSize: 9,
              table: {
                body: [
                  [{ style: "header_left", text: "Participant:" }, "ID_NAME"],
                  [{ style: "header_left", text: "Organization:" }, "ID_ORG"],
                  [{ style: "header_left", text: "Workshop Date:" }, "ID_DATE"],
                  [{ style: "header_left", text: "Due Date:" }, "ID_DUE"],
                  [
                    { style: "header_left", text: "Return Fax:" },
                    "(818) 981-2717",
                  ],
                ],
              },
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: ["*", 20],
        body: [
          [
            {
              fillColor: "#092B58",
              color: "white",
              text: "ORGANIZATIONAL SUMMARY",
            },
            {
              alignment: "center",
              text: "Q8",
              color: "#092B58"
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      table: {
        body: [
          [
            { text: "1.", bold: true },
            { text: "General information", bold: true },
          ],
          [
            { text: "", bold: true },
            {
              layout: "noBorders",
              table: {
                body: [
                  [
                    {
                      text: "A. Type of business/institution: ID_B_TYPE",
                      fontSize: 11,
                    },
                    { text: "C. Annual sales/budget: ID_BUDGET", fontSize: 11 },
                  ],
                  [
                    {
                      text: "B. Number of employees: ID_NO_OF_EMPLOYEES",
                      fontSize: 11,
                    },
                    {
                      text: "D. Annual profit/surplus: ID_PROFIT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "2.", bold: true },
            {
              text: "Please list the major business goals for the organization over the next three years.",
              bold: true,
            },
          ],
          ["", "ID_B_GOALS"],
          [
            { text: "3.", bold: true },
            {
              text: "Please list your own major professional goals over the next three years.",
              bold: true,
            },
          ],
          ["", "ID_P_3_YEAR_GOAL"],
          [
            { text: "4.", bold: true },
            {
              text: "What obstacles must you overcome to achieve the goals for the organization?",
              bold: true,
            },
          ],
          ["", "ID_B_OBSTACLES"],

          [
            { text: "5.", bold: true },
            {
              text: "What obstacles must you overcome to achieve your own professional goals?",
              bold: true,
            },
          ],
          ["", "ID_P_OBSTACLES"],
          [
            { text: "6.", bold: true },
            {
              text: "On a separate sheeet of paper, diagram your present organizational structure.(Attach a chart if you have it. Please include on it the names of key people and their respective positions.)",
              bold: true,
            },
          ],
          ["", "ID_ORGANIZATIONAL_STRUCTURE"],
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
        vLineWidth: function (i) {
          return 0;
        },
      },
    },
    {
      pageBreak: "before",
      layout: "noBorders",
      table: {
        widths: [250, "auto"],
        body: [
          [
            {
              image: "icon",
              alignment: "center",
              width: 125,
            },
            {
              layout: "noBorders",
              fontSize: 9,
              table: {
                body: [
                  [{ style: "header_left", text: "Participant:" }, "ID_NAME"],
                  [{ style: "header_left", text: "Organization:" }, "ID_ORG"],
                  [{ style: "header_left", text: "Workshop Date:" }, "ID_DATE"],
                  [{ style: "header_left", text: "Due Date:" }, "ID_DUE"],
                  [
                    { style: "header_left", text: "Return Fax:" },
                    "(818) 981-2717",
                  ],
                ],
              },
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: "\\nBACK ",
    },
    {
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: [20, "*"],
        body: [
          [
            {
              alignment: "center",
              text: "Q8",
              color: "#092B58"
            },
            {
              fillColor: "#092B58",
              color: "white",
              text: "ORGANIZATIONAL SUMMARY",
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      table: {
        body: [
          [
            { text: "7.", bold: true },
            {
              text: "Describe the strengths and opportunities for improvement of the key people on your own senior management team:",
              bold: true,
            },
          ],
          [
            { text: "A", bold: true },
            {
              layout: "noBorders",
              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11 },
                    { text: "Position: ID_POSITION", fontSize: 11 },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "B", bold: true },
            {
              layout: "noBorders",

              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11 },
                    { text: "Position: ID_POSITION", fontSize: 11 },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "C", bold: true },
            {
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
                vLineWidth: function (i) {
                  return 0;
                },
              },

              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11 },
                    { text: "Position: ID_POSITION", fontSize: 11 },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "D", bold: true },
            {
              layout: "noBorders",
              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11 },
                    { text: "Position: ID_POSITION", fontSize: 11 },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "E", bold: true },
            {
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
                vLineWidth: function (i) {
                  return 0;
                },
              },
              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11, width: "50%" },
                    {
                      text: "Position: ID_POSITION",
                      fontSize: 11,
                      width: "50%",
                    },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "F", bold: true },
            {
              layout: "noBorders",

              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11 },
                    { text: "Position: ID_POSITION", fontSize: 11 },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "G", bold: true },
            {
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
                vLineWidth: function (i) {
                  return 0;
                },
              },
              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11 },
                    { text: "Position: ID_POSITION", fontSize: 11 },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "8.", bold: true },
            {
              text: "Branch offices, affiliiates, satelites or divisions:",
              bold: true,
            },
          ],
          [
            "",
            {
              table: {
                widths: ["*", "*", "*", "*"],
                headerLines: 1,
                body: [
                  [
                    {
                      text: "Name of unit:",
                      fontSize: 11,
                      border: [false, false, false, false],
                      bold: true,
                    },
                    {
                      text: "Location:",
                      fontSize: 11,
                      border: [false, false, false, false],
                      bold: true,
                    },
                    {
                      text: "Phone:",
                      fontSize: 11,
                      border: [false, false, false, false],
                      bold: true,
                    },
                    {
                      text: "Person in charge:",
                      fontSize: 11,
                      border: [false, false, false, false],
                      bold: true,
                    },
                  ],
                  [
                    {
                      text: "ID_UNIT_NAME",
                      fontSize: 11,
                      border: [false, true, true, true],
                    },
                    { text: "ID_LOCATION", fontSize: 11 },
                    { text: "ID_PHONE", fontSize: 11 },
                    {
                      text: "ID_PERSON_IN_CHARGE",
                      fontSize: 11,
                      border: [true, true, false, true],
                    },
                  ],
                  [
                    {
                      text: "ID_UNIT_NAME",
                      fontSize: 11,
                      border: [false, true, true, true],
                    },
                    { text: "ID_LOCATION", fontSize: 11 },
                    { text: "ID_PHONE", fontSize: 11 },
                    {
                      text: "ID_PERSON_IN_CHARGE",
                      fontSize: 11,
                      border: [true, true, false, true],
                    },
                  ],
                  [
                    {
                      text: "ID_UNIT_NAME",
                      fontSize: 11,
                      border: [false, true, true, true],
                    },
                    { text: "ID_LOCATION", fontSize: 11 },
                    { text: "ID_PHONE", fontSize: 11 },
                    {
                      text: "ID_PERSON_IN_CHARGE",
                      fontSize: 11,
                      border: [true, true, false, true],
                    },
                  ],
                  [
                    {
                      text: "ID_UNIT_NAME",
                      fontSize: 11,
                      border: [false, true, true, true],
                    },
                    { text: "ID_LOCATION", fontSize: 11 },
                    { text: "ID_PHONE", fontSize: 11 },
                    {
                      text: "ID_PERSON_IN_CHARGE",
                      fontSize: 11,
                      border: [true, true, false, true],
                    },
                  ],
                ],
              },
            },
          ],
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
        vLineWidth: function (i) {
          return 0;
        },
      },
    },
  ],

  styles: {
    header_left: {
      alignment: "right",
    },
  },
  images: {
    icon: "url('data:image/png;base64,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')",
  },
};`,x=`dd = 
{
  footer: {
    columns: [
      {
        text: "ID_FORM_NO Updated: ID_DATE",
        alignment: "left",
        marginLeft: 10,
        fontSize: 8,
        bold: true,
      },
      {
        text: "Copyright \xA9 2012 Management Action Programs, Inc.  All rights reserved.",
        alignment: "right",
        marginRight: 10,
        fontSize: 8,
        bold: true,
      },
    ],
  },
  content: [
    {
      layout: "noBorders",
      table: {
        widths: [250, "auto"],
        body: [
          [
            {
              image: "icon",
              alignment: "center",
              width: 125,
            },
            {
              layout: "noBorders",
              fontSize: 9,
              table: {
                body: [
                  [{ style: "header_left", text: "Participant:" }, "ID_NAME"],
                  [{ style: "header_left", text: "Organization:" }, "ID_ORG"],
                  [{ style: "header_left", text: "Workshop Date:" }, "ID_DATE"],
                  [{ style: "header_left", text: "Due Date:" }, "ID_DUE"],
                  [
                    { style: "header_left", text: "Return Fax:" },
                    "(818) 981-2717",
                  ],
                ],
              },
            },
          ],
        ],
      },
    },
    {
      text: " ",
    },
    {
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: ["*", 40],
        body: [
          [
            {
              fillColor: "#092B58",
              color: "white",
              text: "KEY PERSONNEL LIST",
            },
            {
              alignment: "RIGHT",
              text: "Q10a",
              color: "#092B58"
            },
          ],
        ],
      },
    },
    {
      text: " ",
    },
    {
      style: "table1",
      layout: {
        vLineWidth: function (i) {
          return 0;
        },
      },
      table: {
        widths: ["*", "*"],
        headerRows: 1,
        body: [
          [
            {
              text: "Name",
              style: "header_line",
            },
            {
              text: "Email",
              style: "header_line",
            },
          ],
          [
            { text: "1. ID_NAME1", style: "listitem" },
            { text: "ID_EMAIL1", style: "listitem" },
          ],
          [
            { text: "2. ID_NAME2", style: "listitem" },
            { text: "ID_EMAIL2", style: "listitem" },
          ],
          [
            { text: "3. ID_NAME3", style: "listitem" },
            { text: "ID_EMAIL3", style: "listitem" },
          ],
          [
            { text: "4. ID_NAME4", style: "listitem" },
            { text: "ID_EMAIL4", style: "listitem" },
          ],
          [
            { text: "5. ID_NAME5", style: "listitem" },
            { text: "ID_EMAIL5", style: "listitem" },
          ],
          [
            { text: "6. ID_NAME6", style: "listitem" },
            { text: "ID_EMAIL6", style: "listitem" },
          ],
          [
            { text: "7. ID_NAME7", style: "listitem" },
            { text: "ID_EMAIL7", style: "listitem" },
          ],
          [
            { text: "8. ID_NAME8", style: "listitem" },
            { text: "ID_EMAIL8", style: "listitem" },
          ],
          [
            { text: "9. ID_NAME9", style: "listitem" },
            { text: "ID_EMAIL9", style: "listitem" },
          ],
          [
            { text: "10. ID_NAME10", style: "listitem" },
            { text: "ID_EMAIL10", style: "listitem" },
          ],
          [
            { text: "11. ID_NAME11", style: "listitem" },
            { text: "ID_EMAIL11", style: "listitem" },
          ],
          [
            { text: "12. ID_NAME12", style: "listitem" },
            { text: "ID_EMAIL12", style: "listitem" },
          ],
          [
            { text: "13. ID_NAME13", style: "listitem" },
            { text: "ID_EMAIL13", style: "listitem" },
          ],
          [
            { text: "14. ID_NAME14", style: "listitem" },
            { text: "ID_EMAIL14", style: "listitem" },
          ],
          [
            { text: "15. ID_NAME15", style: "listitem" },
            { text: "ID_EMAIL15", style: "listitem" },
          ],
          [
            { text: "16. ID_NAME16", style: "listitem" },
            { text: "ID_EMAIL16", style: "listitem" },
          ],
          [
            { text: "17. ID_NAME17", style: "listitem" },
            { text: "ID_EMAIL17", style: "listitem" },
          ],
          [
            { text: "18. ID_NAME18", style: "listitem" },
            { text: "ID_EMAIL18", style: "listitem" },
          ],
          [
            { text: "19. ID_NAME19", style: "listitem" },
            { text: "ID_EMAIL19", style: "listitem" },
          ],
          [
            { text: "20. ID_NAME20", style: "listitem" },
            { text: "ID_EMAIL20", style: "listitem" },
          ],
        ],
      },
    },
  ],
  styles: {
    table1: {
      margin: [0, 5, 0, 15],
    },
    header_left: {
      alignment: "right",
    },
    listitem: {
      lineHeight: 1.2,
    },
    header_line: {
      bold: true,
      color: "#FFFFFF",
      fillColor: "#092B58",
      align: "left",
    },
  },
  images: {
    icon: " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAnCAYAAAD5Lu2WAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAZKADAAQAAAABAAAAJwAAAAATIN7iAAAHkklEQVRoBe1avXIbNxAGjopJ2oXlJjOqwtI2xzHzBKKLZNyZKRLLlZgnMP0Epp8gyhOY7uSkiNRpJoWoJ4icRI670JUmaSIWjkjZPORbHE863S2Aw5GyGmKGvLvF/h0WWOwuTopFu5QROGzcr8lQPRBSNKEA/QZlOb4ncbNoH2kE/r7zVUtJuSqkbEFkLSNWqScLg2RGZX6Af+pfNsJSEBug6eIcfJh8sTCIa5Q8+/9tNJfHYfmpcRUY+Ckh3q682qktGfoX4IIjAGO0YYyOL7lUaoNoAl/CBb59BFQo9+0YfG85GPeoZ2EQfnwKQ1f+2OmribinlHghhBrmYqTU9o39/hHhLgySa8T8kMgoK7/ttBHG1oRSP7io4a56Mc5iU49H4gKvh3fut2UgnnMi4s087luq1Nf6eAD8rMFiR8evX359BpntrnJzrSlK4mmay0RMnrw/+MnL50LfNvisp3nFz0V4Em21/nBDCXk35uO6SqH2lQj2xUTtjd5sDmz4K7/v9A4/RyIos2OAke8laZewRFaTAH0Pysrtte7o9WY301cEEIge5HyWJi1NSsvv00DHMwaiIywDtySCNngCx6/BGA12LIxsZBO6CEw0QZM6RJR08vrltgkdLqx7eBcrJT0OGJskjXEPkVI9FrXWchK5yD3NaNg3Y4xCvG6u1WzGmPJcL8J7FhoMcrMk5Vb19sOfbWMWh7axLGz8eyv7O4P4ma5Gg+DFlytXK94zLclcK6eYZXoOKf+DLNHqcDW5fOXWty0X1oX0oySCMfvVZJRMSJxyV6STxSAwCVYJ/H+tqPJkUKyOwvRpuUrpGlAanHnGbG1ngB8JQO9bvVre5YxC0ddZKKyGtLek1bIahFYJfGQ3TZTrGe5Ou71cyG6kT+rfNPCy+VyflA9mmUhubRwYUjZM3iX4EDbhqp6hyNjguDgMApMgoinyctVr5a42KCe1AIw2ax8yJdVc3JYSYu/4YFMmfzrxE5T4mZtpD/704Jd92uDTe0fMyWkQjVjiY+iYSfoaGVA+TsNnfG7z9Hw2LOXc5Z+KR5jbHx1stmGs706BmRvsZdUrzQzYAchlEKySJgY5N3MZRIUyh+zc3dEmLa9nCdQQ+8pGFk77n6j56MzxcMFglB6MYlwpQRB4r9JcBtGKMYkdp7AeBPhwrq8ozPRiyB22RHg+jj8noyTa554v4AGJKDshpqJqviJzG0SvkihLtssoGgRYuCIBY2daGIZbUZasXnHkoHvARTscblGYrdKAvINZ1XZJuQ2i2ThyCnItMNyqXaRfb1Qq4d3VyZ8/bhG30LhKkEtdq7DG9NOiGDZW8A1fSi+DaL9sWSWBDGzL11c3jY9Zxg6odldTjlLBdRka6OcdXBgkMWApBgzUCjIaxLRZwQ18z7kBc4nEXX42akilG8N+RO4qprO5LdA3oqgvxp7vlfIjE0dMhiNTnwluNMjo3ahzllUmyZmSCiWBZKhMU8Pjd+NuBpwTYHM3J8cn/SQbrJiN5HPyPl/JJUmR/74kShgnviH52+J7zFCjQcRg68gcUp4vPEZZKbL6VNP04JMC5340uSsc+myTfklGmEC2l19P4s7rXnsFy1GAQydWDbNBgD76b7RhXCXXKuhDM5RIUB54G9FrLO8/7WYM7oqdeWQgMhTb5lNwJJ0qNx+tVuqP1mGMXQQwz1lxAFJ5JD1pTLhJuNUgepUI/gsKKKNLKnArMEx2daDm0i2iUKycrfRhmnmsoaYMixYcKWqs1tcU/WRJ/AX314d77gHejHXNXtWw6GS0GwSSdDaK2Z4VCghKKmSYbJ96RXRZeH5IEBiSOsZdxVxNhtL9tNooSLjwpoYfRNgsOhmdBiH9QxV2uPcwzRI14VcVx4ODRVERf5waKtHnaDSM9j1LKaNcxTdTF9pQypnIli1ZdIlfciFQPyVg8Jl7MMCqCx8DQmfMfReetd+0OkAUSLjK+pq5NKNEDe6SbdOCY7T3sRjFgTQRRu/GnaIrI5acyyAaeYI9oSR2Y0LjdWJwNUYCtqPNQgmIvMIw3hGJpZMSW8obZpnBSb0ocIHx+wJjE+VCyd5i97kNQrMeZ8bbpkSNxOtZ4vgCw6WmPohKfwjgIvLop7wBH0G085LoQReJAmZ46jIH8zJCUpfcBiEinAl3EGkY3AUiC1qyMzbfgyhfcacFx1QeY+SD8gcClK6xf84dXgahGQH//QJeYT2tx6xJYMwPfFpwLUzDhinyfzcLFqsME4CiguMoOet5xEuBehmENERo2cHxbAsvdv1MY4q7xzNvlrpabDg3p2IiZmr7TKb9DhOHcoXMxJlSEbxn53A5vbnC3nOqUWiZOqXDYM0cXZAM00EU9SWLifTsajZ8GIpOQGsuHpfR728QaElZ6HSzoxLB21mTwPjF4d+x8rimhvHZB9fLwQg/1pHrv8iCIycvL6yQQXSsTaURamH+iEXjG/7M5+YUvflXTUkMvvzYMojDRJrvMbNJji98CbPomS8R4dOqKN96uDx+87LvorfIGMS0gQrgCnldJnJiHNiYnrsia97Ap4BHXB/ByG0lQtce5PczuAUOmTI8PAD/AyLpoaak/CiNAAAAAElFTkSuQmCC')",
  },
};`,f=`dd = 
{
  footer: {
    columns: [
      {
        text: "ID_FORM_NO Updated: ID_DATE",
        alignment: "left",
        marginLeft: 10,
        fontSize: 8,
        bold: true,
      },
      {
        text: "(please keep a copy of this form)\\nCopyright\xA9 2012 Management Action Programs, Inc.  All rights reserved.",
        alignment: "right",
        marginRight: 10,
        fontSize: 8,
        bold: true,
      },
    ],
  },
  content: [
    {
      layout: "noBorders",
      table: {
        widths: [250, "auto"],
        body: [
          [
            {
              image: "icon",
              alignment: "center",
              width: 125,
            },
            {
              layout: "noBorders",
              fontSize: 9,
              table: {
                body: [
                  [{ style: "header_left", text: "Participant:" }, "ID_NAME"],
                  [{ style: "header_left", text: "Organization:" }, "ID_ORG"],
                  [{ style: "header_left", text: "Workshop Date:" }, "ID_DATE"],
                  [{ style: "header_left", text: "Due Date:" }, "ID_DUE"],
                  [
                    { style: "header_left", text: "Return Fax:" },
                    "(818) 981-2717",
                  ],
                ],
              },
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: ["*", 40],
        body: [
          [
            {
              fillColor: "#092B58",
              color: "white",
              text: "QUESTIONNAIRE FOR SUPERVISING MANAGER OR PARTNER",
            },
            {
              alignment: "center",
              text: "Q11",
              color: "#092B58",
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      table: {
        body: [
          [
            { text: "1.", bold: true },
            {
              text: "Please describe leadership/management strengths of ID_PARTICIPANT_NAME.",
              bold: true,
            },
          ],
          ["", "ID_AP_LEADERSHIP_SKILLS"],
          [
            { text: "2.", bold: true },
            {
              text: "Every leader/manager has opportunities for growth and improvement. What are the management and/or leadership skills in which ID_PARTICIPANT_NAME could improve?",
              bold: true,
            },
          ],
          ["", "ID_AP_LS_FOR_IMPROVEMENT"],
          [
            { text: "3.", bold: true },
            {
              text: "What are the ID_PARTICIPANT_NAME's measurable performance goals($, #, %, etc) for the next 12 months?",
              bold: true,
            },
          ],
          ["", "ID_AP_1_YEAR_GOAL"],
          [
            { text: "4.", bold: true },
            {
              text: "What are ID_PARTICIPANT_NAME's measurable performance goals($,#,%, etc.) that should be achieved within next 30 to 45 days?",
              bold: true,
            },
          ],
          ["", "ID_AP_SHORT_TERM_GOALS"],

          [
            { text: "5.", bold: true },
            {
              text: "What are the main challenges ID_PARTICIPANT_NAME must solve in order to achieve the above goals?",
              bold: true,
            },
          ],
          ["", "ID_AP_CHALLENGES"],
          [
            { text: "6.", bold: true },
            {
              text: "What are the realistic personal career goal(s) for ID_PARTICIPANT_NAME within the organization?",
              bold: true,
            },
          ],
          ["", "ID_AP_PERSONAL_CAREER_GOALS"],
          [
            { text: "7.", bold: true },
            {
              text: "What are the main COMMUNICATING challenges that ID_PARTICIPANT_NAME faces today?",
              bold: true,
            },
          ],
          ["", "ID_AP_COM_CHALLENGES"],
          [
            { text: "8.", bold: true },
            {
              text: "What are the main PLANNING challenges ID_PARTICIPANT_NAME faces?",
              bold: true,
            },
          ],
          ["", "ID_AP_PLAN_CHALLENGES"],
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
        vLineWidth: function (i) {
          return 0;
        },
      },
    },
    {
      pageBreak: "before",
      layout: "noBorders",
      table: {
        widths: [250, "auto"],
        body: [
          [
            {
              image: "icon",
              alignment: "center",
              width: 125,
            },
            {
              layout: "noBorders",
              fontSize: 9,
              table: {
                body: [
                  [{ style: "header_left", text: "Participant:" }, "ID_NAME"],
                  [{ style: "header_left", text: "Organization:" }, "ID_ORG"],
                  [{ style: "header_left", text: "Workshop Date:" }, "ID_DATE"],
                  [{ style: "header_left", text: "Due Date:" }, "ID_DUE"],
                  [
                    { style: "header_left", text: "Return Fax:" },
                    "(818) 981-2717",
                  ],
                ],
              },
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: "\\nBACK ",
    },
    {
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: [40, "*"],
        body: [
          [
            {
              alignment: "center",
              color: "#092B58",
              text: "Q11",
            },
            {
              fillColor: "#092B58",
              color: "white",
              text: "QUESTIONNAIRE FOR SUPERVISING MANAGER OR PARTNER",
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      table: {
        body: [
          [
            { text: "9.", bold: true },
            {
              text: "What are the main ORGANIZING challenges ID_PARTICIPANT_NAME faces?",
              bold: true,
            },
          ],
          ["", "ID_AP_ORG_CHALLENGES"],
          [
            { text: "10.", bold: true },
            {
              text: "What are the main STAFFING challenges ID_PARTICIPANT_NAME faces?",
              bold: true,
            },
          ],
          ["", "ID_AP_STAFF_CHALLENGES"],
          [
            { text: "11.", bold: true },
            {
              text: "What are the main CONTROLLING challenges ID_PARTICIPANT_NAME faces?",
              bold: true,
            },
          ],
          ["", "ID_AP_CONTROL_CHALLENGES"],
          [
            { text: "12.", bold: true },
            {
              text: "What are the main LEADING challenges ID_PARTICIPANT_NAME faces?",
              bold: true,
            },
          ],
          ["", "ID_AP_LEAD_CHALLENGES"],
          [
            { text: "13.", bold: true },
            {
              text: "What would you expect  ID_PARTICIPANT_NAME to gain from this management process? How will you know when those expectations have been met?",
              bold: true,
            },
          ],
          ["", "ID_AP_EXPECTATION"],
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
        vLineWidth: function (i) {
          return 0;
        },
      },
    },
  ],

  styles: {
    header_left: {
      alignment: "right",
    },
  },
  images: {
    icon: " url('data:image/png;base64,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')",
  },
};`,m=`dd = 
{
	footer: {
    fontSize: 7,
    layout: 'noBorders',
    table: { 
        widths: [30, '*', '*', 30],
        body: [
                ['','',{
                    bold: true, 
                    alignment: 'right', 
                    fontSize: 9,
                    text: '(Please keep a copy of this form)'
                    
                },''],
                ['',{
                    text:'1035629(3) Updated: Tue Jul 19 00:35:38 2022'
                    
                },
                {
                    alignment: 'right', 
                    text:'Copyright \xA9 2012 Management Action Programs, Inc. All right reserved.'
                },'']
            ]
    }
    },
    content: [
    {
        layout: 'noBorders',
        table: {
            widths: [280, 'auto'],
            body: [
                [
                    {
                        image: 'icon',
                        alignment: 'left',
                        width: 150,
                    },
                    {
                        layout: 'noBorders',
                        fontSize: 9,
                        table: {
                            body:[
                                [{style:'header_left',text:'Participant:'},'ID_name'],
                                [{style:'header_left',text:'Organization:'},'ID_org'],
                                [{style:'header_left',text:'Workshop Date:'},'ID_date'],
                                [{style:'header_left',text:'Due Date:'},'ID_due'],
                                [{style:'header_left',text:'Return Fax:'},'(818) 981-2717']
                            ]
                        }
                    }
                ]
            ]
        }
    },
    {
        fontSize: 10,
        bold: true,
        text: ' '
    },
    {
        fontSize: 13,
        bold: true,
        headerRows: 1,
        table:{
            widths: ["*",30],
            body: [
                [
                    {
                        fillColor: 'black',
                        color: 'white',
                        text: 'MANAGEMENT AND LEADERSHIP INVENTORY - MANAGER / PARTNER'
                    },
                    {
                        alignment: 'center',
                        text:"Q12"
                    },
                ]
            ]
        }
        
    },
    { text: '\\n'},
    {
        style: 'body', 
        table: {
            widths: ['*',100],
            body:[
                [
                    {
                        border: [false,false,false,false],
                        alignment: 'left',
                        text: "Please check the numbers which best describe Kerry Brunson's management and leadership abilities, 1 being poor, 9 being excellent. Kerry Brunson will complete the same form and the comparative results will be used as coaching tool. Please be candid."
                    },
                    {
                        border: [false,false,false,false],
                        layout: 'noBorders',
                        italics: true,
                        fontSize: 11,
                        table:{
                            widths: ['*'],
                            body: [
                                [{text: ''}],
                                [{bold: true, text: ''}]
                            ]
                        }
                    }
            ]]
        }
    },
    { text: '\\n'},
    {   
        layout: 'noBorders',
        style: 'sub_title',
        table:{
            widths: [330,'*','*'],
            body: [
                    [
                        {
                            bold: true,
                            text: 'Communicating Abilities'
                        },
                        {
                            alignment: 'right',
                            bold: true,
                            text: 'Appraised by:'
                        },
                        {
                            italics: true,
                            alignment: 'left',
                            text: 'John Manning'
                        }
                    ]
                ]
        }
    },
    {
        layout: 'noBorders',
        style: 'sub_sub_title',
        table:{
            widths: [20,300,'*','*'],
            body: [
                ['',
                    {
                        text: '(Ability to convey meaning and obtain understanding)'
                    },
                    {
                        text: '1 = Poor'
                    },
                    {
                        text: '9 = Excellent'
                    }
                ],['','','','']
            ]
        }
    },
    {
        style: 'body',
        table:{
            widths: ['*',8,8,8,8,8,8,8,8,8],
            alignment: 'center',
            style: 'body',
            body: [
                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Speaking one-to-one'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Speaking in groups'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Writing skills'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Listening'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Relating to supervising manager / partner'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Relating to peers'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Relating to direct reports'},'','','','','','','','X',''],
            ]
        }
    },
    { text: '\\n'},
    {   
        layout: 'noBorders',
        style: 'sub_title',
        table:{
            widths: [330,'*','*'],
            body: [
                    [
                        {
                            bold: true,
                            text: 'Planning Abilities'
                        },
                        {
                            alignment: 'right',
                            fontSize: 10,
                            text: ''
                        },
                        {
                            bold: true,
                            italics: true,
                            alignment: 'left',
                            text: ''
                        }
                    ]
                ]
        }
    },
    {
        layout: 'noBorders',
        style: 'sub_sub_title',
        table:{
            widths: [20,300,'*','*'],
            body: [
                ['',
                    {
                        text: '(Ability to develop goals and strategies for future action)'
                    },
                    {
                        text: '1 = Poor'
                    },
                    {
                        text: '9 = Excellent'
                    }
                ],['','','','']
            ]
        }
    },
    {
        style: 'body',
        table:{
            widths: ['*',8,8,8,8,8,8,8,8,8],
            alignment: 'center',
            style: 'body',
            body: [
                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Foreseeing problems and opportunities'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Analyzing problems and facts'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Setting clear, measurable goals'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Developing strategies'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Scheduling work and planning time'},'','','','','','','','X',''],
            ]
        }
    },
    { text: '\\n'},
    {   
        layout: 'noBorders',
        style: 'sub_title',
        table:{
            widths: [330,'*','*'],
            body: [
                    [
                        {
                            bold: true,
                            text: 'Organizing Abilities'
                        },
                        {
                            alignment: 'right',
                            fontSize: 10,
                            text: ''
                        },
                        {
                            bold: true,
                            italics: true,
                            alignment: 'left',
                            text: ''
                        }
                    ]
                ]
        }
    },
    {
        layout: 'noBorders',
        style: 'sub_sub_title',
        table:{
            widths: [20,300,'*','*'],
            body: [
                ['',
                    {
                        text: '(Ability to align work and resources productively in relation and goals)'
                    },
                    {
                        text: '1 = Poor'
                    },
                    {
                        text: '9 = Excellent'
                    }
                ],['','','','']
            ]
        }
    },
    {
        style: 'body',
        table:{
            widths: ['*',8,8,8,8,8,8,8,8,8],
            alignment: 'center',
            style: 'body',
            body: [
                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Allocating resources'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Coordinating the work of others'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Sorting the vital from the less important'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Delegating'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Each team member understands job responsibilities'},'','','','','','','','X',''],
            ]
        }
    },
    { text: '\\n'},
    {   
        layout: 'noBorders',
        style: 'sub_title',
        table:{
            widths: [330,'*','*'],
            body: [
                    [
                        {
                            bold: true,
                            text: 'Staffing Abilities'
                        },
                        {
                            alignment: 'right',
                            fontSize: 10,
                            text: ''
                        },
                        {
                            bold: true,
                            italics: true,
                            alignment: 'left',
                            text: ''
                        }
                    ]
                ]
        }
    },
    {
        layout: 'noBorders',
        style: 'sub_sub_title',
        table:{
            widths: [20,300,'*','*'],
            body: [
                ['',
                    {
                        text: '(Ability to recruit, select, develop and retain people)'
                    },
                    {
                        text: '1 = Poor'
                    },
                    {
                        text: '9 = Excellent'
                    }
                ],['','','','']
            ]
        }
    },
    {
        style: 'body',
        table:{
            widths: ['*',8,8,8,8,8,8,8,8,8],
            alignment: 'center',
            style: 'body',
            body: [
                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Aligning staffing needs with company goals'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Recruiting'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Selecting the right people'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Providing training opportunities'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Retaining people'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Developing potential in people'},'','','','','','','','X',''],
            ]
        }
    },
    {
        layout: 'noBorders',
        table: {
            widths: [280, 'auto'],
            body: [
                [
                    {
                        image: 'icon',
                        alignment: 'left',
                        width: 150,
                    },
                    {
                        layout: 'noBorders',
                        fontSize: 9,
                        table: {
                            body:[
                                [{style:'header_left',text:'Participant:'},'ID_name'],
                                [{style:'header_left',text:'Organization:'},'ID_org'],
                                [{style:'header_left',text:'Workshop Date:'},'ID_date'],
                                [{style:'header_left',text:'Due Date:'},'ID_due'],
                                [{style:'header_left',text:'Return Fax:'},'(818) 981-2717']
                            ]
                        }
                    }
                ]
            ]
        }
    },
    {
        fontSize: 10,
        bold: true,
        text: 'BACK'
    },
    {
        fontSize: 13,
        bold: true,
        headerRows: 1,
        table:{
            widths: [30,"*"],
            body: [
                [
                    {
                        alignment: 'center',
                        text:"Q12"
                    },
                    {
                        fillColor: 'black',
                        color: 'white',
                        text: 'MANAGEMENT AND LEADERSHIP INVENTORY - MANAGER / PARTNER'
                    }
                    ]
            ]
        }
        
    },
    {text: '\\n'},
    {   
        layout: 'noBorders',
        style: 'sub_title',
        table:{
            widths: [330,'*','*'],
            body: [
                    [
                        {
                            bold: true,
                            text: 'Controlling Abilities'
                        },
                        {
                            alignment: 'right',
                            fontSize: 10,
                            text: 'Appraised by:'
                        },
                        {
                            bold: true,
                            italics: true,
                            alignment: 'left',
                            text: 'Self'
                        }
                    ]
                ]
        }
    },
    {
        layout: 'noBorders',
        style: 'sub_sub_title',
        table:{
            widths: [20,300,'*','*'],
            body: [
                ['',
                    {
                        text: '(Measuring performance and taking appropiate action)'
                    },
                    {
                        text: '1 = Poor'
                    },
                    {
                        text: '9 = Excellent'
                    }
                ],['','','','']
            ]
        }
    },
    {
        style: 'body',
        table:{
            widths: ['*',8,8,8,8,8,8,8,8,8],
            alignment: 'center',
            style: 'body',
            body: [
                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Setting standards'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Assessing performance'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Following through'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Holding people accountable'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Taking corrective action'},'','','','','','','','X',''],
            ]
        }
    },
    {text: '\\n'},
    {   
        layout: 'noBorders',
        style: 'sub_title',
        table:{
            widths: [330,'*','*'],
            body: [
                    [
                        {
                            bold: true,
                            text: 'Teamwork Abilities'
                        },
                        {
                            alignment: 'right',
                            fontSize: 10,
                            text: ''
                        },
                        {
                            bold: true,
                            italics: true,
                            alignment: 'left',
                            text: ''
                        }
                    ]
                ]
        }
    },
    {
        layout: 'noBorders',
        style: 'sub_sub_title',
        table:{
            widths: [20,300,'*','*'],
            body: [
                ['',
                    {
                        text: '(Ability to work together to achieve common goals)'
                    },
                    {
                        text: '1 = Poor'
                    },
                    {
                        text: '9 = Excellent'
                    }
                ],['','','','']
            ]
        }
    },
    {
        style: 'body',
        table:{
            widths: ['*',8,8,8,8,8,8,8,8,8],
            alignment: 'center',
            style: 'body',
            body: [
                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Causes a high level of teamwork'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Commits self to team goals'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: "Gives support to others' programs"},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Coordinates with others to achieve goals'},'','','','','','','','X',''],
            ]
        }
    },
    {text: '\\n'},
    {   
        layout: 'noBorders',
        style: 'sub_title',
        table:{
            widths: [330,'*','*'],
            body: [
                    [
                        {
                            bold: true,
                            text: 'Leader Abilities'
                        },
                        {
                            alignment: 'right',
                            fontSize: 10,
                            text: ''
                        },
                        {
                            bold: true,
                            italics: true,
                            alignment: 'left',
                            text: ''
                        }
                    ]
                ]
        }
    },
    {
        layout: 'noBorders',
        style: 'sub_sub_title',
        table:{
            widths: [20,300,'*','*'],
            body: [
                ['',
                    {
                        text: '(Ability to inspire people to achieve goals)'
                    },
                    {
                        text: '1 = Poor'
                    },
                    {
                        text: '9 = Excellent'
                    }
                ],['','','','']
            ]
        }
    },
    {
        style: 'body',
        table:{
            widths: ['*',8,8,8,8,8,8,8,8,8],
            alignment: 'center',
            style: 'body',
            body: [
                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Clearly communicates vision and values'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates determination and relentless resolve'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates integrity'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Shows confidence'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Develops trust'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Is an excellent coach and mentor'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Inspires continuous improvement'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates personal humility'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates passion and commitment'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Confronts difficult issues and finds resolution'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Attracts strong people to the organization'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Maintains the focus of the organization'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Each team member has clear, quantifiable goals'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates empathy'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Encourages excellence'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: "Job duties of the team are aligned with the organization's direction"},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Discovers and develops the strengths of others'},'','','','','','','','X',''],
                [{border: [false, true, true, true], style: 'body_table_name', text: 'Embraces and implements change'},'','','','','','','','X',''],
            ]
        }
    },
    ],
    styles: {
    header_left: {
        alignment: 'right'
    },
    sub_title: {
        fontSize: 10
    },
    sub_sub_title: {
        fontSize: 8,
        italics: true,
    },
    body: {
        fontSize: 8,
        alignment: 'center'
    },
    body_table_name: {
        border: [false, false, false, false],
        alignment: 'left'
    }
    
    },
    
    images: {
    icon: "url('data:image/png;base64,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')"
    }
  }`,c=`
dd = {
  footer: {
    columns: [
      {
        text: "\\nID_FORM_NO Updated: ID_DATE",
        alignment: "left",
        marginLeft: 25,
        fontSize: 8,
        bold: true,
      },
      {
        text: "(Please keep a copy of this form)\\nCopyright\xA9 2012 Management Action Programs, Inc.  All rights reserved.",
        alignment: "right",
        marginRight: 25,
        fontSize: 8,
        bold: true,
      },
    ],
  },
  content: [
    {
      layout: "noBorders",
      table: {
        widths: [250, "auto"],
        body: [
          [
            {
              image: "icon",
              alignment: "left",
              width: 125,
            },
            {
              layout: "noBorders",
              fontSize: 9,
              table: {
                body: [
                  [{ style: "header_left", text: "Participant:" }, "ID_NAME"],
                  [{ style: "header_left", text: "Organization:" }, "ID_ORG"],
                  [{ style: "header_left", text: "Workshop Date:" }, "ID_DATE"],
                  [{ style: "header_left", text: "Due Date:" }, "ID_DUE"],
                  [
                    { style: "header_left", text: "Return Fax:" },
                    "(818) 981-2717",
                  ],
                ],
              },
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: ["*", 40],
        body: [
          [
            {
              fillColor: "#092B58",
              color: "white",
              text: "HOTEL RESERVATION",
            },
            {
              alignment: "center",
              text: "Q18",
              color: "#092B58",
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      text: "Accomodations for ID_DATE\\n ",
      style: "header",
    },
    {
      text: [
        { text: "1. Room occupancy: ", style: "que" },
        { text: "ID_OCCUPANCY", style: "answer" },
      ],
    },
    {
      text: [
        {
          text: "2. Will you arrive early and need a room on ID_PREV_DAY: ",
          style: "que",
        },
        { text: "ID_PREV_DAY_ARRIVAL ", style: "answer" },
        { text: "Arrival Time: ", style: "que" },
        { text: "ID_TIME", style: "ans" },
      ],
    },
    {
      text: [
        { text: "3. Do you plan to have a guest?: ", style: "que" },
        { text: "ID_GUEST ", style: "answer" },
        { text: "Guest Dinner: ", style: "que" },
        { text: "ID_DAY_1: ", style: "que" },
        { text: "ID_G_DINNER_2  ", style: "answer" },
        { text: "ID_DAY_2: ", style: "que" },
        { text: "ID_G_DINNER_2  ", style: "answer" },
      ],
    },
    {
      text: "4.Do you have any dietary restrictions?",
      style: "que",
    },
    {
      text: "ID_DIET_RESTRICTIONS",
      style: "answer",
      marginLeft: 20,
    },
    {
      text: "5. Credit card information is required in order to reserve lodging and/or meals. Please complete the information below:",
      style: "que",
    },
    {
      text: [
        { text: "Name on credit card: ", style: "que" },
        { text: "ID_CC_NAME", style: "answer" },
      ],
      marginLeft: 20,
    },
    {
      text: [
        { text: "Credit card number and type: ", style: "que" },
        { text: "ID_CC_NO_TYPE", style: "answer" },
      ],
      marginLeft: 20,
    },
    {
      text: [
        { text: "Credit card expiration date: ", style: "que" },
        { text: "ID_CC_EXP_DATE", style: "answer" },
      ],
      marginLeft: 20,
    },
    {
      text: "6.Your name and title as they appear on our records ",
      style: "que",
    },
    {
      text: "ID_NAME",
      style: "answer",
      marginLeft: 20,
    },
    {
      text: "If you want your name or title to appear differently, please print them here",
      style: "que",
    },
    {
      text: "ID_UPDATED_NAME",
      style: "answer",
      marginLeft: 20,
    },
  ],

  styles: {
    header_left: {
      alignment: "right",
    },
    header: {
      alignment: "center",
      bold: true,
      fontSize: 18,
      color: "#092B58"
    },
    answer: {
      bold: true,
      fontSize: 10,
      lineHeight: 2,
    },
    que: {
      fontSize: 10,
      lineHeight: 2,
    },
  },
  images: {
    icon: " url('data:image/png;base64,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')",
  },
};`,J={parameters:{storySource:{source:`import React from "react";
import Playground from "../../components/index"
import { EditorProvider } from "../../components/provider";
import '../../components/index.css';
import Q1 from "./map-forms/q1"
import Q2 from "./map-forms/q2"
import Q4 from "./map-forms/q4"
import Q5 from "./map-forms/q5"
import Q8 from "./map-forms/q8"
import Q10 from "./map-forms/q10"
import Q11 from "./map-forms/q11"
import Q12 from "./map-forms/q12"
import Q18 from "./map-forms/q18"

export default {
  title: "pdmake/MAP-Forms",
  component: Playground,
};
const data = {
  q1: Q1,
  q2: Q2,
  q4: Q4,
  q5: Q5,
  q8: Q8,
  q10: Q10,
  q11: Q11,
  q12: Q12,
  q18: Q18,
}
const Template = (args) => {
  return (
    <EditorProvider {...args} >
      <Playground />
    </EditorProvider>
  )
}

export const Question1 = Template.bind({});

Question1.args = {
  source: data.q1,
};

export const Question2 = Template.bind({});

Question2.args = {
  source: data.q2,
};

export const Question4 = Template.bind({});

Question4.args = {
  source: data.q4,
};
export const Question5 = Template.bind({});

Question5.args = {
  source: data.q5,
};
export const Question8 = Template.bind({});

Question8.args = {
  source: data.q8,
};
export const Question10 = Template.bind({});

Question10.args = {
  source: data.q10,
};
export const Question11 = Template.bind({});

Question11.args = {
  source: data.q11,
};
export const Question12 = Template.bind({});

Question12.args = {
  source: data.q12,
};
export const Question18 = Template.bind({});

Question18.args = {
  source: data.q18,
};`,locationsMap:{"question-1":{startLoc:{col:17,line:30},endLoc:{col:1,line:36},startBody:{col:17,line:30},endBody:{col:1,line:36}},"question-2":{startLoc:{col:17,line:30},endLoc:{col:1,line:36},startBody:{col:17,line:30},endBody:{col:1,line:36}},"question-4":{startLoc:{col:17,line:30},endLoc:{col:1,line:36},startBody:{col:17,line:30},endBody:{col:1,line:36}},"question-5":{startLoc:{col:17,line:30},endLoc:{col:1,line:36},startBody:{col:17,line:30},endBody:{col:1,line:36}},"question-8":{startLoc:{col:17,line:30},endLoc:{col:1,line:36},startBody:{col:17,line:30},endBody:{col:1,line:36}},"question-10":{startLoc:{col:17,line:30},endLoc:{col:1,line:36},startBody:{col:17,line:30},endBody:{col:1,line:36}},"question-11":{startLoc:{col:17,line:30},endLoc:{col:1,line:36},startBody:{col:17,line:30},endBody:{col:1,line:36}},"question-12":{startLoc:{col:17,line:30},endLoc:{col:1,line:36},startBody:{col:17,line:30},endBody:{col:1,line:36}},"question-18":{startLoc:{col:17,line:30},endLoc:{col:1,line:36},startBody:{col:17,line:30},endBody:{col:1,line:36}}}}},title:"pdmake/MAP-Forms",component:n},e={q1:d,q2:y,q4:A,q5:u,q8:b,q10:x,q11:f,q12:m,q18:c},t=r(o=>l(s,{...o,children:l(n,{})}),"Template"),g=t.bind({});g.args={source:e.q1};const h=t.bind({});h.args={source:e.q2};const I=t.bind({});I.args={source:e.q4};const _=t.bind({});_.args={source:e.q5};const D=t.bind({});D.args={source:e.q8};const p=t.bind({});p.args={source:e.q10};const S=t.bind({});S.args={source:e.q11};const N=t.bind({});N.args={source:e.q12};const E=t.bind({});E.args={source:e.q18};const O=["Question1","Question2","Question4","Question5","Question8","Question10","Question11","Question12","Question18"];export{g as Question1,p as Question10,S as Question11,N as Question12,E as Question18,h as Question2,I as Question4,_ as Question5,D as Question8,O as __namedExportsOrder,J as default};
//# sourceMappingURL=map-forms.stories.13feaf55.js.map
