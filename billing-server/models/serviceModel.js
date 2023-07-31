// models/serviceModel.js

let services = [
    { id: 1, name: "Service X", price: 1500 },
    { id: 2, name: "Service Y", price: 8500 },
    { id: 3, name: "Service Z", price: 700 },
    // Add more services as needed
  ];
  
  class Service {
    static getAllServices() {
      return services;
    }
  
    static getServiceById(id) {
      return services.find((service) => service.id === id);
    }
  }
  
  module.exports = Service;
  