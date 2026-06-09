import type { INodeProperties } from 'n8n-workflow';

export const dataSourcesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					]
				}
			},
			"options": [
				{
					"name": "Get All Data Sources",
					"value": "Get All Data Sources",
					"action": "List all data sources",
					"description": "Get the configuration of all present data sources",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/datasources"
						}
					}
				},
				{
					"name": "Create Data Source",
					"value": "Create Data Source",
					"action": "Create a data source",
					"description": "Create a new data source",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/datasources"
						}
					}
				},
				{
					"name": "Reload All Datasources All Nodes",
					"value": "Reload All Datasources All Nodes",
					"action": "Update properties from data sources",
					"description": "Update properties from all data source on all nodes. The call is asynchronous.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/datasources/reload"
						}
					}
				},
				{
					"name": "Reload One Datasource All Nodes",
					"value": "Reload One Datasource All Nodes",
					"action": "Update properties from data sources",
					"description": "Update properties from all data source on all nodes. The call is asynchronous.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/datasources/reload/{{$parameter[\"datasourceId\"]}}"
						}
					}
				},
				{
					"name": "Delete Data Source",
					"value": "Delete Data Source",
					"action": "Delete a data source",
					"description": "Delete a data source configuration",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/datasources/{{$parameter[\"datasourceId\"]}}"
						}
					}
				},
				{
					"name": "Get Data Source",
					"value": "Get Data Source",
					"action": "Get data source configuration",
					"description": "Get the configuration of a data source",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/datasources/{{$parameter[\"datasourceId\"]}}"
						}
					}
				},
				{
					"name": "Update Data Source",
					"value": "Update Data Source",
					"action": "Update a data source configuration",
					"description": "Update the configuration of a data source",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/datasources/{{$parameter[\"datasourceId\"]}}"
						}
					}
				},
				{
					"name": "Reload All Datasources One Node",
					"value": "Reload All Datasources One Node",
					"action": "Update properties for one node from all data sources",
					"description": "Update properties from all data sources on one nodes. The call is asynchronous.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/nodes/{{$parameter[\"nodeId\"]}}/fetchData"
						}
					}
				},
				{
					"name": "Reload One Datasource One Node",
					"value": "Reload One Datasource One Node",
					"action": "Update properties for one node from a data source",
					"description": "Update properties from a data source on one nodes. The call is asynchronous.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/nodes/{{$parameter[\"nodeId\"]}}/fetchData/{{$parameter[\"datasourceId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /datasources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Get All Data Sources"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Get All Data Sources"
					]
				}
			}
		},
		{
			"displayName": "PUT /datasources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Create Data Source"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Synchronize example data from the CMDB",
			"description": "Description of the goal of the data source to create.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Create Data Source"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Enable or disable data source.",
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Create Data Source"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "test-data-source",
			"description": "Unique identifier of the data source to create.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Create Data Source"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Test data source",
			"description": "The human readable name of the data source to create.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Create Data Source"
					]
				}
			}
		},
		{
			"displayName": "Run Parameters",
			"name": "runParameters",
			"type": "json",
			"default": "{\n  \"onGeneration\": true,\n  \"onNewNode\": true,\n  \"schedule\": {\n    \"type\": \"scheduled\"\n  }\n}",
			"description": "Parameters to configure when the data source is fetched to update node properties.",
			"routing": {
				"send": {
					"property": "runParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Create Data Source"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "json",
			"default": "{\n  \"name\": \"HTTP\",\n  \"parameters\": {\n    \"checkSsl\": true,\n    \"headers\": [\n      {\n        \"name\": \"X-API-Key\",\n        \"value\": \"05ce8e3d9df6\"\n      }\n    ],\n    \"requestMethod\": \"GET\",\n    \"requestMode\": {\n      \"name\": \"byNode\"\n    },\n    \"requestTimeout\": 10,\n    \"url\": \"http://jsonplaceholder.typicode.com/users/1\"\n  }\n}",
			"description": "Define and configure data source type.",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Create Data Source"
					]
				}
			}
		},
		{
			"displayName": "Update Timeout",
			"name": "updateTimeout",
			"type": "number",
			"default": 30,
			"description": "Duration in seconds before aborting data source update. The main goal is to prevent never ending requests. If a periodicity if configured, you should set that timeout at a lower value.",
			"routing": {
				"send": {
					"property": "updateTimeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Create Data Source"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Create Data Source"
					]
				}
			}
		},
		{
			"displayName": "POST /datasources/reload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Reload All Datasources All Nodes"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Reload All Datasources All Nodes"
					]
				}
			}
		},
		{
			"displayName": "POST /datasources/reload/{datasourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Reload One Datasource All Nodes"
					]
				}
			}
		},
		{
			"displayName": "Datasource ID",
			"name": "datasourceId",
			"required": true,
			"description": "Id of the data source",
			"default": "test-data-source",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Reload One Datasource All Nodes"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Reload One Datasource All Nodes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /datasources/{datasourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Delete Data Source"
					]
				}
			}
		},
		{
			"displayName": "Datasource ID",
			"name": "datasourceId",
			"required": true,
			"description": "Id of the data source",
			"default": "test-data-source",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Delete Data Source"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Delete Data Source"
					]
				}
			}
		},
		{
			"displayName": "GET /datasources/{datasourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Get Data Source"
					]
				}
			}
		},
		{
			"displayName": "Datasource ID",
			"name": "datasourceId",
			"required": true,
			"description": "Id of the data source",
			"default": "test-data-source",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Get Data Source"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Get Data Source"
					]
				}
			}
		},
		{
			"displayName": "POST /datasources/{datasourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Update Data Source"
					]
				}
			}
		},
		{
			"displayName": "Datasource ID",
			"name": "datasourceId",
			"required": true,
			"description": "Id of the data source",
			"default": "test-data-source",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Update Data Source"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Synchronize example data from the CMDB",
			"description": "Description of the goal of the data source to create.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Update Data Source"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Enable or disable data source.",
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Update Data Source"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "test-data-source",
			"description": "Unique identifier of the data source to create.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Update Data Source"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Test data source",
			"description": "The human readable name of the data source to create.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Update Data Source"
					]
				}
			}
		},
		{
			"displayName": "Run Parameters",
			"name": "runParameters",
			"type": "json",
			"default": "{\n  \"onGeneration\": true,\n  \"onNewNode\": true,\n  \"schedule\": {\n    \"type\": \"scheduled\"\n  }\n}",
			"description": "Parameters to configure when the data source is fetched to update node properties.",
			"routing": {
				"send": {
					"property": "runParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Update Data Source"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "json",
			"default": "{\n  \"name\": \"HTTP\",\n  \"parameters\": {\n    \"checkSsl\": true,\n    \"headers\": [\n      {\n        \"name\": \"X-API-Key\",\n        \"value\": \"05ce8e3d9df6\"\n      }\n    ],\n    \"requestMethod\": \"GET\",\n    \"requestMode\": {\n      \"name\": \"byNode\"\n    },\n    \"requestTimeout\": 10,\n    \"url\": \"http://jsonplaceholder.typicode.com/users/1\"\n  }\n}",
			"description": "Define and configure data source type.",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Update Data Source"
					]
				}
			}
		},
		{
			"displayName": "Update Timeout",
			"name": "updateTimeout",
			"type": "number",
			"default": 30,
			"description": "Duration in seconds before aborting data source update. The main goal is to prevent never ending requests. If a periodicity if configured, you should set that timeout at a lower value.",
			"routing": {
				"send": {
					"property": "updateTimeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Update Data Source"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Update Data Source"
					]
				}
			}
		},
		{
			"displayName": "POST /nodes/{nodeId}/fetchData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Reload All Datasources One Node"
					]
				}
			}
		},
		{
			"displayName": "Node ID",
			"name": "nodeId",
			"required": true,
			"description": "Id of the target node",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Reload All Datasources One Node"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Reload All Datasources One Node"
					]
				}
			}
		},
		{
			"displayName": "POST /nodes/{nodeId}/fetchData/{datasourceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Reload One Datasource One Node"
					]
				}
			}
		},
		{
			"displayName": "Node ID",
			"name": "nodeId",
			"required": true,
			"description": "Id of the target node",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Reload One Datasource One Node"
					]
				}
			}
		},
		{
			"displayName": "Datasource ID",
			"name": "datasourceId",
			"required": true,
			"description": "Id of the data source",
			"default": "test-data-source",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Reload One Datasource One Node"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Data Sources"
					],
					"operation": [
						"Reload One Datasource One Node"
					]
				}
			}
		},
];
