/* eslint-disable */
const metadata = {
    models: {
        subject: {
            name: 'Subject', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                }, name: {
                    name: "name",
                    type: "String",
                }, courses: {
                    name: "courses",
                    type: "Course",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'subject',
                }, created_at: {
                    name: "created_at",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, name: {
                    name: "name",
                    fields: ["name"]
                },
            }
            ,
        }
        ,
        course: {
            name: 'Course', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                }, title: {
                    name: "title",
                    type: "String",
                }, description: {
                    name: "description",
                    type: "String",
                    isOptional: true,
                }, subject: {
                    name: "subject",
                    type: "Subject",
                    isDataModel: true,
                    backLink: 'courses',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "subject_id" },
                }, subject_id: {
                    name: "subject_id",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'subject',
                }, prerequisite_text: {
                    name: "prerequisite_text",
                    type: "String",
                    isOptional: true,
                }, prerequisites: {
                    name: "prerequisites",
                    type: "Course",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'prerequisite_for',
                }, prerequisite_for: {
                    name: "prerequisite_for",
                    type: "Course",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'prerequisites',
                }, corequisites: {
                    name: "corequisites",
                    type: "Course",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'corequisite_for',
                }, corequisite_for: {
                    name: "corequisite_for",
                    type: "Course",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'corequisites',
                }, created_at: {
                    name: "created_at",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, credits: {
                    name: "credits",
                    type: "Int",
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, title: {
                    name: "title",
                    fields: ["title"]
                },
            }
            ,
        }
        ,
    }
    ,
    deleteCascade: {
        subject: ['Course'],
    }
    ,
};
export default metadata;
