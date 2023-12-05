// import React from 'react';
// import {createStore, action, thunk} from 'easy-peasy';

// const contactModel = {
//   contacts: [],
//   sent_requests: [],
//   received_requests: [],
//   sorted_contacts: [],

//   updateMessagesBlock: action((state, data) => {
//     state.contacts = data.contacts;
//     state.sent_requests = data.sent_requests;
//     state.received_requests = data.received_requests;
//     state.sorted_contacts = data.sorted_contacts;
//   }),
// };

// const activeModal = {
//   active: 'Home2',

//   updateActive: action((state, data) => {
//     console.warn('tttttttt', data);
//     state.active = data;
//   }),
// };

// const userModal = {
//   userInfo: '',

//   updateUser: action((state, data) => {
//     // console.warn('tttttttt', data);
//     state.userInfo = data;
//   }),
// };

// const sendTo = {
//   sendToUser: '',

//   updateSendToUser: action((state, data) => {
//     // console.warn('sendToUser>>>>>', data);
//     state.sendToUser = data;
//   }),
// };

// const sendTo2 = {
//   sendToUser2: '',

//   updateSendToUser2: action((state, data) => {
//     // console.warn('sendToUser>>>>>', data);
//     state.sendToUser2 = data;
//   }),
// };

// const sendTo3 = {
//   sendToUser3: '',

//   updateSendToUser3: action((state, data) => {
//     // console.warn('sendToUser3333>>>>>', data);
//     state.sendToUser3 = data;
//   }),
// };

// const selectedContact = {
//   selectedContact: '',

//   updateSelectedContact: action((state, data) => {
//     console.warn('selectedContact>>>>>', data);
//     state.selectedContact = data;
//   }),
// };

// const sendToToggle = {
//   sendToActive: [],
//   updateSendToActive: action((state, data) => {
//     // console.warn('sendToToggle>>>>>', data);
//     state.sendToActive = data;
//   }),
// };

// const transactionInfo = {
//   transactions: [],
//   updateTransaction: action((state, data) => {
//     console.warn('sendToToggle>>>>>', data);
//     state.transactions = data;
//   }),
// };

// const requestCount = {
//   count: 0,
//   updateRequestCount: action((state, data) => {
//     console.warn('sendToToggle>>>>>', data);
//     state.count = data;
//   }),
// };

// const virtualAccount = {
//   account: [],
//   updateVirtualAccount: action((state, data) => {
//     console.warn('sendToToggle>>>>>', data);
//     state.account = data;
//   }),
// };
// const search = {
//   searchValue: 0,
//   updatesearchValue: action((state, data) => {
//     console.warn('updatesearchValue>>>>>>>>>>', data);
//     state.searchValue = data;
//   }),
// };
// const distance = {
//   distance: '',
//   updateDistance: action((state, data) => {
//     console.warn('updatesearchValue>>>>>>>>>>', data);
//     state.distance = data;
//   }),
// };

// const selectedFriend = {
//   friend: '',
//   updateSelectedFriend: action((state, data) => {
//     console.warn('updatesearchValue>>>>>>>>>>', data);
//     state.friend = data;
//   }),
// };

// const hideAccount = {
//   hideEye: false,
//   updateHideAccount: action((state, data) => {
//     console.warn('updatesearchValue>>>>>>>>>>', data);
//     state.hideEye = data;
//   }),
// };

// const globalTransactions = {
//   transactions: [],
//   updateTransactions: action((state, data) => {
//     console.warn('updatesearchValue>>>>>>>>>>', data);
//     state.transactions = data;
//   }),
// };

// const globalMediumTransactions = {
//   mediumTransactions: [],
//   updateMediumTransactions: action((state, data) => {
//     console.warn('updatesearchValue>>>>>>>>>>', data);
//     state.mediumTransactions = data;
//   }),
// };

// const globalOrders = {
//   orders: [],
//   updateOrders: action((state, data) => {
//     console.warn('updatesearchValue>>>>>>>>>>', data);
//     state.orders = data;
//   }),
// };

// const globalAmounts = {
//   amounts: '',
//   updateAmounts: action((state, data) => {
//     console.warn('updatesearchValue>>>>>>>>>>', data);
//     state.amounts = data;
//   }),
// };

// const globalContact = {
//   contacts: [],
//   updateContacts: action((state, data) => {
//     console.warn('updatesearchValue>>>>>>>>>>', data);
//     state.contacts = data;
//   }),
// };

// const globalMediumContacts = {
//   mediumContacts: [],
//   updateMediumContacts: action((state, data) => {
//     console.warn('updatesearchValue>>>>>>>>>>', data);
//     state.mediumContacts = data;
//   }),
// };

// const searchParams = {
//   params: [],
//   updateSearchParams: action((state, data) => {
//     console.warn('updatesearchValue>>>>>>>>>>', data);
//     state.params = data;
//   }),
// };

// const activeOrder = {
//   activeState: 'Transaction',
//   updateActiveOrder: action((state, data) => {
//     console.warn('updatesearchValue>>>>>>>>>> updateActiveOrder', data);
//     state.params = data;
//   }),
// };

// const AppStore = createStore({
//   allContacts: contactModel,
//   activePage: activeModal,
//   userDetails: userModal,
//   sendToDetails: sendTo,
//   sendToDetails2: sendTo2,
//   sendToDetails3: sendTo3,
//   sendToToggle: sendToToggle,
//   selectedContact: selectedContact,
//   requestCount: requestCount,
//   transactionInfo: transactionInfo,
//   virtualAccount: virtualAccount,
//   search: search,
//   distance: distance,
//   selectedFriend: selectedFriend,
//   hideAccount: hideAccount,
//   globalTransactions: globalTransactions,
//   globalOrders: globalOrders,
//   globalContact: globalContact,
//   globalMediumTransactions: globalMediumTransactions,
//   globalAmounts: globalAmounts,
//   globalMediumContacts: globalMediumContacts,
//   searchParams: searchParams,
//   activeOrder: activeOrder,
// });

// export default AppStore;
