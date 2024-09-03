const {clients, projects} = require('./dummydata.js');

const Client = require('../models/Client.js');
const Project = require('../models/Project.js');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList
} = require('graphql');


// Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        phone: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});

// Project Type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        status: { type: GraphQLString },
        client:{
            type:ClientType,
            resolve(parent,args){
                return Client.findById( parent.clientID);
            }
        }
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        client: {
            type: ClientType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return Client.findById(args.id);
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return Project.findById(args.id);
            }
        },
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                return Client.find();
            }
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return Project.find();
            }
        }
    }
});

module.exports = new GraphQLSchema({ query: RootQuery });