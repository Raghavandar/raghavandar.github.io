export default {
  items: [
    // {
    //   title: true,
    //   name: 'Workforce Insights Platform',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    {
      name: 'Saravanan Chidambaram',
      url: '#',
      icon: 'navbar-toggler-icon user-icon',
      class: 'user-nav-item'
    },
    {
      name: 'Executive Summary',
      url: '/data/executiveSummary',
      icon: 'navbar-toggler-icon executive-summary-icon',
      viewName: 'executiveSummary',
      viewLink: ''
    },
    {
      name: 'Regular Workforce',
      url: '/data/regularWorkforce',
      icon: 'navbar-toggler-icon regular-workforce-icon',
      viewName: 'regularWorkforce',
      viewLink: '',
      children: [
        {
          name: 'Headcount',
          url: '/data/regularWorkforce-hc',
          icon: 'navbar-toggler-icon regular-workforce-icon',
          parent: 'Regular Workforce',
          viewName: 'regularWorkforce-hc',
          viewLink: 'https://dataviz-dev.paypalcorp.com/#/site/PeopleMetricsandAnalytics/views/PPWorkforceSLTDashboardMockTest12/RegularWorkforce-HC?:iid=1'
        },
        {
          name: 'Cost',
          url: '/data/regularWorkforce-cost',
          icon: 'navbar-toggler-icon regular-workforce-cost-icon',
          parent: 'Regular Workforce',
          viewName: 'regularWorkforce-cost',
          viewLink: 'https://bitelite.in/'
        }
      ],
    },
    {
      name: 'Talent Acquisition',
      url: '/data/talentAcquisition',
      icon: 'navbar-toggler-icon talent-acquisition-icon',
      viewName: 'talentAcquisition',
      viewLink: '',
      children: [
        {
          name: 'Executive Summary',
          url: '/data/talentAcquisition-exeSummary',
          icon: 'navbar-toggler-icon executive-summary-icon',
          parent: 'Talent Acquisition',
          viewName: 'talentAcquisition-exeSummary',
          viewLink: ''
        },
        {
          name: 'Requisitions in Motion',
          url: '/data/talentAcquisition-reqMotion',
          icon: 'navbar-toggler-icon reqs-icon',
          parent: 'Talent Acquisition',
          viewName: 'talentAcquisition-reqMotion',
          viewLink: ''
        },
        {
          name: 'Candidate Offers',
          url: '/data/talentAcquisition-canOffers',
          icon: 'navbar-toggler-icon candidate-offers-icon',
          parent: 'Talent Acquisition',
          viewName: 'talentAcquisition-canOffers',
          viewLink: ''
        },
        {
          name: 'Applicant Pipeline',
          url: '/data/talentAcquisition-appPipeline',
          icon: 'navbar-toggler-icon candidate-offers-icon',
          parent: 'Talent Acquisition',
          viewName: 'talentAcquisition-appPipeline',
          viewLink: ''
        },
        {
          name: 'Time to Fill - Detailed view',
          url: '/data/talentAcquisition-timeFill',
          icon: 'navbar-toggler-icon reqs-icon',
          parent: 'Talent Acquisition',
          viewName: 'talentAcquisition-timeFill',
          viewLink: ''
        },
        {
          name: 'Applicant Pipeline - D&I',
          url: '/data/talentAcquisition-appPipelineDI',
          icon: 'navbar-toggler-icon reqs-icon',
          parent: 'Talent Acquisition',
          viewName: 'talentAcquisition-appPipelineDI',
          viewLink: ''
        }
      ],
    },
    {
      name: 'Diversity & Inclusion',
      url: '/data/diversityInclusion',
      icon: 'navbar-toggler-icon diversity-Inclusion-icon ',
      viewName: 'diversityInclusion',
      viewLink: '',
      children: [
        {
          name: 'Executive Summary',
          url: '/data/diversityInclusion-exesSummary',
          icon: 'navbar-toggler-icon executive-summary-icon',
          parent: 'Diversity & Inclusion',
          viewName: 'diversityInclusion-exesSummary',
          viewLink: ''
        },
        {
          name: 'D&I Director + - Monthly Dashboard',
          url: '/data/diversityInclusion-director',
          icon: 'navbar-toggler-icon regular-workforce-cost-icon',
          children: [
            {
              name: 'Director + - Overall View',
              url: '/data/diversityInclusion-directorOverall',
              icon: 'navbar-toggler-icon executive-summary-icon',
              parent: 'Diversity & Inclusion',
              viewName: 'diversityInclusion-directorOverall',
              viewLink: ''
            },
            {
              name: 'Director + - Detailed View',
              url: '/data/diversityInclusion-directorDetailed',
              icon: 'navbar-toggler-icon regular-workforce-cost-icon',
              parent: 'Diversity & Inclusion',
              viewName: 'diversityInclusion-directorDetailed',
              viewLink: ''
            },
            {
              name: 'Director + - Deep Dive',
              url: '/data/diversityInclusion-directorDeepDive',
              icon: 'navbar-toggler-icon regular-workforce-cost-icon',
              parent: 'Diversity & Inclusion',
              viewName: 'diversityInclusion-directorDeepDive',
              viewLink: ''
            }
          ],
        },
        {
          name: 'Focus 50 - D&I',
          url: '/data/diversityInclusion-focus50',
          icon: 'navbar-toggler-icon regular-workforce-cost-icon',
          parent: 'Diversity & Inclusion',
          viewName: 'diversityInclusion-focus50',
          viewLink: ''
        }
      ],
    },
    {
      name: 'Position Management',
      url: '/data/position-management',
      icon: 'navbar-toggler-icon position-management-icon',
      viewName: 'position-management',
      viewLink: ''
    },
    {
      name: 'Attrition',
      url: '/data/attrition',
      icon: 'navbar-toggler-icon attrition-icon',
      viewName: 'attrition',
      viewLink: ''
    },
    {
      name: 'Contingent Workforce',
      url: '/data/contingentWorkforce',
      icon: 'navbar-toggler-icon contingent-icon',
      viewName: 'contingentWorkforce',
      viewLink: '',
      children: [
        {
          name: 'Headcount',
          url: '/data/contingentWorkforce-hc',
          icon: 'navbar-toggler-icon contingent-icon',
          parent: 'Contingent Workforce',
          viewName: 'contingentWorkforce-hc',
          viewLink: ''
        },
        {
          name: 'Cost',
          url: '/data/contingentWorkforce-cost',
          icon: 'navbar-toggler-icon contingent-cost-icon',
          parent: 'Contingent Workforce',
          viewName: 'contingentWorkforce-cost',
          viewLink: ''
        }
      ],
    },
    {
      name: 'Time keeping',
      url: '/data/timeKeeping',
      icon: 'navbar-toggler-icon time-keeping-icon',
      viewName: 'timeKeeping',
      viewLink: '',
      children: [
        {
          name: 'Executive Summary',
          url: '/data/timeKeeping-exeSummary',
          icon: 'navbar-toggler-icon executive-summary-icon',
          parent: 'Time keeping',
          viewName: 'timeKeeping-exeSummary',
          viewLink: ''
        },
        {
          name: 'Detailed View',
          url: '/data/timeKeeping-detailedView',
          icon: 'navbar-toggler-icon executive-summary-icon',
          parent: 'Time keeping',
          viewName: 'timeKeeping-detailedView',
          viewLink: ''
        },
        {
          name: 'Overtime Summary',
          url: '/data/timeKeeping-overtimeSummary',
          icon: 'navbar-toggler-icon executive-summary-icon',
          parent: 'Time keeping',
          viewName: 'timeKeeping-overtimeSummary',
          viewLink: ''
        }
      ],
    },
    {
      name: 'Exit Survey Insights',
      url: '/data/exitSurvey',
      icon: 'navbar-toggler-icon exit-survey-icon',
      viewName: 'exitSurvey',
      viewLink: '',
      children: [
        {
          name: 'Leaders view - Exit Survey Insights',
          url: '/data/exitSurvey-leaderView-exitSurvey',
          icon: 'navbar-toggler-icon executive-summary-icon',
          parent: 'Exit Survey Insights',
          viewName: 'exitSurvey-leaderView-exitSurvey',
          viewLink: ''
        },
        {
          name: 'Leaders View - Demographic & Survey Category ',
          url: '/data/exitSurvey-leaderView-demograghic',
          icon: 'navbar-toggler-icon executive-summary-icon',
          parent: 'Exit Survey Insights',
          viewName: 'exitSurvey-leaderView-demograghic',
          viewLink: ''
        },
        {
          name: 'Business Unit View - Exit Survey Insights',
          url: '/data/exitSurvey-businessView-exitSurvey',
          icon: 'navbar-toggler-icon executive-summary-icon',
          parent: 'Exit Survey Insights',
          viewName: 'exitSurvey-businessView-exitSurvey',
          viewLink: ''
        },
        {
          name: 'Business Unit View - Demographic & Survey Category ',
          url: '/data/exitSurvey-businessView-demograghic',
          icon: 'navbar-toggler-icon executive-summary-icon',
          parent: 'Exit Survey Insights',
          viewName: 'exitSurvey-businessView-demograghic',
          viewLink: ''
        }
      ],
    },
    {
      name: 'Glossary',
      url: '/data/glossary',
      icon: 'navbar-toggler-icon glossary-icon',
      viewName: 'glossary',
      viewLink: ''
    }
  ],
};
