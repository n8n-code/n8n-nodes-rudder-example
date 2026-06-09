import type { INodeProperties } from 'n8n-workflow';

export const nodesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					]
				}
			},
			"options": [
				{
					"name": "List Accepted Nodes",
					"value": "List Accepted Nodes",
					"action": "List managed nodes",
					"description": "Get information about the nodes managed by the target server",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nodes"
						}
					}
				},
				{
					"name": "Create Nodes",
					"value": "Create Nodes",
					"action": "Create one or several new nodes",
					"description": "Use the provided array of node information to create new nodes",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/nodes"
						}
					}
				},
				{
					"name": "Apply Policy All Nodes",
					"value": "Apply Policy All Nodes",
					"action": "Trigger an agent run on all nodes",
					"description": "This API allows to trigger an agent run on all nodes. Response contains a json stating if agent could be started on each node, but not if the run went fine and do not display any output from it. You can see the result of the run in Rudder web interface or in the each agent logs.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/nodes/applyPolicy"
						}
					}
				},
				{
					"name": "List Pending Nodes",
					"value": "List Pending Nodes",
					"action": "List pending nodes",
					"description": "Get information about the nodes pending acceptation",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nodes/pending"
						}
					}
				},
				{
					"name": "Change Pending Node Status",
					"value": "Change Pending Node Status",
					"action": "Update pending Node status",
					"description": "Accept or refuse a pending node",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/nodes/pending/{{$parameter[\"nodeId\"]}}"
						}
					}
				},
				{
					"name": "Get Nodes Status",
					"value": "Get Nodes Status",
					"action": "Get nodes acceptation status",
					"description": "Get acceptation status (pending, accepted, deleted, unknown) of a list of nodes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nodes/status"
						}
					}
				},
				{
					"name": "Delete Node",
					"value": "Delete Node",
					"action": "Delete a node",
					"description": "Remove a node from the Rudder server. It won't be managed anymore.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/nodes/{{$parameter[\"nodeId\"]}}"
						}
					}
				},
				{
					"name": "Node Details",
					"value": "Node Details",
					"action": "Get information about a node",
					"description": "Get details about a given node",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nodes/{{$parameter[\"nodeId\"]}}"
						}
					}
				},
				{
					"name": "Update Node",
					"value": "Update Node",
					"action": "Update node settings and properties",
					"description": "Update node settings and properties",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/nodes/{{$parameter[\"nodeId\"]}}"
						}
					}
				},
				{
					"name": "Apply Node",
					"value": "Apply Node",
					"action": "Trigger an agent run",
					"description": "This API allows to trigger an agent run on the target node. Response is a stream of the actual agent run on the node.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/nodes/{{$parameter[\"nodeId\"]}}/applyPolicy"
						}
					}
				},
				{
					"name": "Node Inherited Properties",
					"value": "Node Inherited Properties",
					"action": "Get inherited node properties for a node",
					"description": "This API returns all node properties for a node, including group inherited ones.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nodes/{{$parameter[\"nodeId\"]}}/inheritedProperties"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /nodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"List Accepted Nodes"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Level of information to include from the node inventory. Some base levels are defined (**minimal**, **default**, **full**). You can add fields you want to a base level by adding them to the list, possible values are keys from json answer. If you don't provide a base level, they will be added to `default` level, so if you only want os details, use `minimal,os` as the value for this parameter.\n* **minimal** includes: `id`, `hostname` and `status`\n* **default** includes **minimal** plus `architectureDescription`, `description`, `ipAddresses`, `lastRunDate`, `lastInventoryDate`, `machine`, `os`, `managementTechnology`, `policyServerId`, `properties` (be careful! Only node own properties, if you also need inherited properties, look at the dedicated `/nodes/{id}/inheritedProperties` endpoint), `policyMode `, `ram` and `timezone`\n* **full** includes: **default** plus `accounts`, `bios`, `controllers`, `environmentVariables`, `fileSystems`, `managementTechnologyDetails`, `memories`, `networkInterfaces`, `ports`, `processes`, `processors`, `slots`, `software`, `sound`, `storage`, `videos` and `virtualMachines`",
			"default": "minimal",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "include",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"List Accepted Nodes"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"description": "The criterion you want to find for your nodes. Replaces the `where`, `composition` and `select` parameters in a single parameter.",
			"default": "{\n  \"composition\": \"and\",\n  \"select\": \"node\",\n  \"where\": [\n    {\n      \"attribute\": \"OS\",\n      \"comparator\": \"eq\",\n      \"objectType\": \"node\",\n      \"value\": \"Linux\"\n    }\n  ]\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"List Accepted Nodes"
					]
				}
			}
		},
		{
			"displayName": "Where",
			"name": "where",
			"description": "The criterion you want to find for your nodes",
			"default": "[\n  {\n    \"attribute\": \"OS\",\n    \"comparator\": \"eq\",\n    \"objectType\": \"node\",\n    \"value\": \"Linux\"\n  }\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "where",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"List Accepted Nodes"
					]
				}
			}
		},
		{
			"displayName": "Composition",
			"name": "composition",
			"description": "Boolean operator to use between each  `where` criteria.",
			"default": "and",
			"type": "options",
			"options": [
				{
					"name": "And",
					"value": "and"
				},
				{
					"name": "Or",
					"value": "or"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "composition",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"List Accepted Nodes"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"description": "What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.",
			"default": "node",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"List Accepted Nodes"
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
						"Nodes"
					],
					"operation": [
						"List Accepted Nodes"
					]
				}
			}
		},
		{
			"displayName": "PUT /nodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Create Nodes"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"agentKey\": {\n    \"value\": \"-----BEGIN CERTIFICATE-----\\nMIIFqDCC[...]3tALNn\\n-----END CERTIFICATE-----\"\n  },\n  \"hostname\": \"my.node.hostname.local\",\n  \"id\": \"378740d3-c4a9-4474-8485-478e7e52db52\",\n  \"ipAddresses\": [\n    \"192.168.180.90\"\n  ],\n  \"os\": {\n    \"fullName\": \"Debian GNU/Linux 9 (stretch)\",\n    \"version\": 9.5\n  },\n  \"policyServerId\": \"root\",\n  \"properties\": [\n    {\n      \"name\": \"datacenter\",\n      \"value\": \"AMS2\"\n    }\n  ],\n  \"timezone\": {\n    \"name\": \"CEST\",\n    \"offset\": 200\n  }\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Create Nodes"
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
						"Nodes"
					],
					"operation": [
						"Create Nodes"
					]
				}
			}
		},
		{
			"displayName": "POST /nodes/applyPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Apply Policy All Nodes"
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
						"Nodes"
					],
					"operation": [
						"Apply Policy All Nodes"
					]
				}
			}
		},
		{
			"displayName": "GET /nodes/pending",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"List Pending Nodes"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Level of information to include from the node inventory. Some base levels are defined (**minimal**, **default**, **full**). You can add fields you want to a base level by adding them to the list, possible values are keys from json answer. If you don't provide a base level, they will be added to `default` level, so if you only want os details, use `minimal,os` as the value for this parameter.\n* **minimal** includes: `id`, `hostname` and `status`\n* **default** includes **minimal** plus `architectureDescription`, `description`, `ipAddresses`, `lastRunDate`, `lastInventoryDate`, `machine`, `os`, `managementTechnology`, `policyServerId`, `properties` (be careful! Only node own properties, if you also need inherited properties, look at the dedicated `/nodes/{id}/inheritedProperties` endpoint), `policyMode `, `ram` and `timezone`\n* **full** includes: **default** plus `accounts`, `bios`, `controllers`, `environmentVariables`, `fileSystems`, `managementTechnologyDetails`, `memories`, `networkInterfaces`, `ports`, `processes`, `processors`, `slots`, `software`, `sound`, `storage`, `videos` and `virtualMachines`",
			"default": "minimal",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "include",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"List Pending Nodes"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"description": "The criterion you want to find for your nodes. Replaces the `where`, `composition` and `select` parameters in a single parameter.",
			"default": "{\n  \"composition\": \"and\",\n  \"select\": \"node\",\n  \"where\": [\n    {\n      \"attribute\": \"OS\",\n      \"comparator\": \"eq\",\n      \"objectType\": \"node\",\n      \"value\": \"Linux\"\n    }\n  ]\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"List Pending Nodes"
					]
				}
			}
		},
		{
			"displayName": "Where",
			"name": "where",
			"description": "The criterion you want to find for your nodes",
			"default": "[\n  {\n    \"attribute\": \"OS\",\n    \"comparator\": \"eq\",\n    \"objectType\": \"node\",\n    \"value\": \"Linux\"\n  }\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "where",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"List Pending Nodes"
					]
				}
			}
		},
		{
			"displayName": "Composition",
			"name": "composition",
			"description": "Boolean operator to use between each  `where` criteria.",
			"default": "and",
			"type": "options",
			"options": [
				{
					"name": "And",
					"value": "and"
				},
				{
					"name": "Or",
					"value": "or"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "composition",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"List Pending Nodes"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"description": "What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.",
			"default": "node",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"List Pending Nodes"
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
						"Nodes"
					],
					"operation": [
						"List Pending Nodes"
					]
				}
			}
		},
		{
			"displayName": "POST /nodes/pending/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Change Pending Node Status"
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
						"Nodes"
					],
					"operation": [
						"Change Pending Node Status"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "accepted",
			"description": "New status of the pending node",
			"options": [
				{
					"name": "Accepted",
					"value": "accepted"
				},
				{
					"name": "Refused",
					"value": "refused"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Change Pending Node Status"
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
						"Nodes"
					],
					"operation": [
						"Change Pending Node Status"
					]
				}
			}
		},
		{
			"displayName": "GET /nodes/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Get Nodes Status"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "Comma separated list of node Ids",
			"default": "8403353b-42c4-46f5-a08d-bc77a1a0bad9,root",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ids",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Get Nodes Status"
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
						"Nodes"
					],
					"operation": [
						"Get Nodes Status"
					]
				}
			}
		},
		{
			"displayName": "DELETE /nodes/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Delete Node"
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
						"Nodes"
					],
					"operation": [
						"Delete Node"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"description": "Deletion mode to use, either move to trash ('move', default) or erase ('erase')",
			"default": "move",
			"type": "options",
			"options": [
				{
					"name": "Move",
					"value": "move"
				},
				{
					"name": "Erase",
					"value": "erase"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "mode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Delete Node"
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
						"Nodes"
					],
					"operation": [
						"Delete Node"
					]
				}
			}
		},
		{
			"displayName": "GET /nodes/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Node Details"
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
						"Nodes"
					],
					"operation": [
						"Node Details"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Level of information to include from the node inventory. Some base levels are defined (**minimal**, **default**, **full**). You can add fields you want to a base level by adding them to the list, possible values are keys from json answer. If you don't provide a base level, they will be added to `default` level, so if you only want os details, use `minimal,os` as the value for this parameter.\n* **minimal** includes: `id`, `hostname` and `status`\n* **default** includes **minimal** plus `architectureDescription`, `description`, `ipAddresses`, `lastRunDate`, `lastInventoryDate`, `machine`, `os`, `managementTechnology`, `policyServerId`, `properties` (be careful! Only node own properties, if you also need inherited properties, look at the dedicated `/nodes/{id}/inheritedProperties` endpoint), `policyMode `, `ram` and `timezone`\n* **full** includes: **default** plus `accounts`, `bios`, `controllers`, `environmentVariables`, `fileSystems`, `managementTechnologyDetails`, `memories`, `networkInterfaces`, `ports`, `processes`, `processors`, `slots`, `software`, `sound`, `storage`, `videos` and `virtualMachines`",
			"default": "minimal",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "include",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Node Details"
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
						"Nodes"
					],
					"operation": [
						"Node Details"
					]
				}
			}
		},
		{
			"displayName": "POST /nodes/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Update Node"
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
						"Nodes"
					],
					"operation": [
						"Update Node"
					]
				}
			}
		},
		{
			"displayName": "Agent Key",
			"name": "agentKey",
			"type": "json",
			"default": "{\n  \"value\": \"-----BEGIN CERTIFICATE-----\\nMIIFqDCC[...]3tALNn\\n-----END CERTIFICATE-----\"\n}",
			"description": "Information about agent key or certificate",
			"routing": {
				"send": {
					"property": "agentKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Update Node"
					]
				}
			}
		},
		{
			"displayName": "Policy Mode",
			"name": "policyMode",
			"type": "options",
			"default": "audit",
			"description": "In which mode the node will apply its configuration policy. Use `default` to use the global mode.",
			"options": [
				{
					"name": "Audit",
					"value": "audit"
				},
				{
					"name": "Enforce",
					"value": "enforce"
				},
				{
					"name": "Default",
					"value": "default"
				}
			],
			"routing": {
				"send": {
					"property": "policyMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Update Node"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "[\n  {\n    \"name\": \"datacenter\",\n    \"value\": \"AMS2\"\n  }\n]",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Update Node"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "options",
			"default": "enabled",
			"description": "The node life cycle state. See [dedicated doc](https://docs.rudder.io/reference/current/usage/advanced_node_management.html#node-lifecycle) for more information.",
			"options": [
				{
					"name": "Enabled",
					"value": "enabled"
				},
				{
					"name": "Ignored",
					"value": "ignored"
				},
				{
					"name": "Empty Policies",
					"value": "empty-policies"
				},
				{
					"name": "Initializing",
					"value": "initializing"
				},
				{
					"name": "Preparing Eol",
					"value": "preparing-eol"
				}
			],
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Update Node"
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
						"Nodes"
					],
					"operation": [
						"Update Node"
					]
				}
			}
		},
		{
			"displayName": "POST /nodes/{nodeId}/applyPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Apply Node"
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
						"Nodes"
					],
					"operation": [
						"Apply Node"
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
						"Nodes"
					],
					"operation": [
						"Apply Node"
					]
				}
			}
		},
		{
			"displayName": "GET /nodes/{nodeId}/inheritedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Nodes"
					],
					"operation": [
						"Node Inherited Properties"
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
						"Nodes"
					],
					"operation": [
						"Node Inherited Properties"
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
						"Nodes"
					],
					"operation": [
						"Node Inherited Properties"
					]
				}
			}
		},
];
