module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/contact-form',
     handler: 'contact-form.sendEmail',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
