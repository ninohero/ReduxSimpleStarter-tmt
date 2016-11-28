const formDetails = {
  ProjectForm: {
    formName: 'project',
    service: 'project'
  },
  ProjectResources: {
    formName: 'resources',
    service: 'resources'
  },
  NonResources: {
    formName: 'nonresources',
    service: 'nonresource'
  }
};

const fieldValues = {
  dropdowns: {
    accountsNotice: [
      {value: '', label: 'Please select…'},
      {value: 'half-yearly', label: 'Half-Yearly'},
    ]
  },
  checkboxes: {
    clauses: [
      {value: 'checkboxUlitmateNetLoss', label: 'Ultimate Net Loss definition (incl. / excl. ALAE)'},
      {value: 'checkboxJurisdiction', label: 'This Reinsurance Contract is governed by and is subject to the Laws of England and Wales and except as otherwise provided by the Arbitration Clause of this Reinsurance Contract, the English Courts shall have exclusive jurisdiction over any matter relating to this Reinsurance Contract other than in respect of any issue regarding Protected Cell Companies; this includes but is not limited to their formation, operation and limitation of liability which will be governed by the Law of the Island of Guernsey.'},
    ]
  }
}

const staticProjects  = {
  '1a': {
    name: 'Honey Maid 2016 PR Execution',
    billingOffice: 'WS Chicago',
    estimatedStart: '2016/12/24',
    durationMonths: 12,
    totalBudget: 255000,
    win: true,
    status :'pending'
  },
  '2b': {
    name: 'Lorem Ipsum Dolor sit Amet',
    billingOffice: 'WS Chicago',
    estimatedStart: '2016/11/2',
    durationMonths: 8,
    totalBudget: 150000,
    win: true,
    status :'started'
  },
  '3c': {
    name: 'Aenan Neque Quam',
    billingOffice: 'FSO New York',
    estimatedStart: '2017/2/12',
    durationMonths: 18,
    totalBudget: 550000,
    win: false,
    status :'pending'
  },
  '4d': {
    name: 'Honey Maid 2016 PR Execution',
    billingOffice: 'WS Chicago',
    estimatedStart: '2016/12/24',
    durationMonths: 12,
    totalBudget: 255000,
    win: true,
    status :'pending'
  },
  '5e': {
    name: 'Lorem Ipsum Dolor sit Amet',
    billingOffice: 'WS Chicago',
    estimatedStart: '2016/11/2',
    durationMonths: 8,
    totalBudget: 150000,
    win: true,
    status :'started'
  },
  '6f': {
    name: 'Aenan Neque Quam',
    billingOffice: 'FSO New York',
    estimatedStart: '2017/2/12',
    durationMonths: 18,
    totalBudget: 550000,
    win: false,
    status :'pending'
  },
  '1b': {
    name: 'Honey Maid 2016 PR Execution',
    billingOffice: 'WS Chicago',
    estimatedStart: '2014/12/24',
    durationMonths: 12,
    totalBudget: 255000,
    win: true,
    status :'pending'
  },
  '2c': {
    name: 'Lorem Ipsum Dolor sit Amet',
    billingOffice: 'WS Chicago',
    estimatedStart: '2012/11/2',
    durationMonths: 8,
    totalBudget: 150000,
    win: true,
    status :'started'
  },
  '3d': {
    name: 'Aenan Neque Quam',
    billingOffice: 'FSO New York',
    estimatedStart: '2017/2/12',
    durationMonths: 18,
    totalBudget: 550000,
    win: false,
    status :'pending'
  },
  '4e': {
    name: 'Honey Maid 2016 PR Execution',
    billingOffice: 'WS Chicago',
    estimatedStart: '2012/12/24',
    durationMonths: 12,
    totalBudget: 255000,
    win: true,
    status :'pending'
  },
  '5f': {
    name: 'Lorem Ipsum Dolor sit Amet',
    billingOffice: 'WS Chicago',
    estimatedStart: '2015/11/2',
    durationMonths: 8,
    totalBudget: 150000,
    win: true,
    status :'started'
  },
  '6g': {
    name: 'Aenan Neque Quam',
    billingOffice: 'FSO New York',
    estimatedStart: '2014/2/12',
    durationMonths: 18,
    totalBudget: 550000,
    win: false,
    status :'pending'
  },
}

export { formDetails, fieldValues, staticProjects }
