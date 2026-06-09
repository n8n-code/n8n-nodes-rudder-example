import type { INodeProperties } from 'n8n-workflow';

export const groupsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					]
				}
			},
			"options": [
				{
					"name": "List Groups",
					"value": "List Groups",
					"action": "List all groups",
					"description": "List all groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups"
						}
					}
				},
				{
					"name": "Create Group",
					"value": "Create Group",
					"action": "Create a group",
					"description": "Create a new group based in provided parameters",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups"
						}
					}
				},
				{
					"name": "Create Group Category",
					"value": "Create Group Category",
					"action": "Create a group category",
					"description": "Create a new group category",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups/categories"
						}
					}
				},
				{
					"name": "Delete Group Category",
					"value": "Delete Group Category",
					"action": "Delete group category",
					"description": "Delete a group category. It must have no child groups and no children categories.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/categories/{{$parameter[\"groupCategoryId\"]}}"
						}
					}
				},
				{
					"name": "Get Group Category Details",
					"value": "Get Group Category Details",
					"action": "Get group category details",
					"description": "Get detailed information about a group category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/categories/{{$parameter[\"groupCategoryId\"]}}"
						}
					}
				},
				{
					"name": "Update Group Category",
					"value": "Update Group Category",
					"action": "Update group category details",
					"description": "Update detailed information about a group category",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/categories/{{$parameter[\"groupCategoryId\"]}}"
						}
					}
				},
				{
					"name": "Get Group Tree",
					"value": "Get Group Tree",
					"action": "Get groups tree",
					"description": "Get all available groups and their categories in a tree",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/tree"
						}
					}
				},
				{
					"name": "Delete Group",
					"value": "Delete Group",
					"action": "Delete a group",
					"description": "Update detailed information about a group",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"groupId\"]}}"
						}
					}
				},
				{
					"name": "Group Details",
					"value": "Group Details",
					"action": "Get group details",
					"description": "Get detailed information about a group",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"groupId\"]}}"
						}
					}
				},
				{
					"name": "Update Group",
					"value": "Update Group",
					"action": "Update group details",
					"description": "Update detailed information about a group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"groupId\"]}}"
						}
					}
				},
				{
					"name": "Reload Group",
					"value": "Reload Group",
					"action": "Reload a group",
					"description": "Recompute the content of a group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"groupId\"]}}/reload"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"List Groups"
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
						"Groups"
					],
					"operation": [
						"List Groups"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Create Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Category",
			"name": "category",
			"type": "string",
			"default": "e17ecf6a-a9f2-44de-a97c-116d24d30ff4",
			"description": "Id of the new group's category",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Create Group"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Documentation for the group",
			"description": "Group description",
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
						"Groups"
					],
					"operation": [
						"Create Group"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "Ubuntu 18.04 nodes",
			"description": "Name of the group",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Create Group"
					]
				}
			}
		},
		{
			"displayName": "Dynamic",
			"name": "dynamic",
			"type": "boolean",
			"default": true,
			"description": "Should the group be dynamically refreshed (if not, it is a static group)",
			"routing": {
				"send": {
					"property": "dynamic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Create Group"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Enable or disable the group",
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
						"Groups"
					],
					"operation": [
						"Create Group"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
			"description": "Group id, only provide it when needed.",
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
						"Groups"
					],
					"operation": [
						"Create Group"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "[\n  {\n    \"name\": \"os\",\n    \"value\": \"debian10\"\n  }\n]",
			"description": "Group properties",
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
						"Groups"
					],
					"operation": [
						"Create Group"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"type": "json",
			"default": "{\n  \"composition\": \"and\",\n  \"select\": \"node\",\n  \"where\": [\n    {\n      \"attribute\": \"OS\",\n      \"comparator\": \"eq\",\n      \"objectType\": \"node\",\n      \"value\": \"Linux\"\n    }\n  ]\n}",
			"description": "The criteria defining the group. If not provided, the group will be empty.",
			"routing": {
				"send": {
					"property": "query",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Create Group"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"type": "string",
			"default": "b9f6d98a-28bc-4d80-90f7-d2f14269e215",
			"description": "The id of the group the clone will be based onto. If this parameter if provided,  the new group will be a clone of this source. Other value will override values from the source.",
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Create Group"
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
						"Groups"
					],
					"operation": [
						"Create Group"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Create Group Category"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Nodes by hardware provider",
			"description": "Group category description",
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
						"Groups"
					],
					"operation": [
						"Create Group Category"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
			"description": "Group category id, only provide it when needed.",
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
						"Groups"
					],
					"operation": [
						"Create Group Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Hardware groups",
			"description": "Name of the group category",
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
						"Groups"
					],
					"operation": [
						"Create Group Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Parent",
			"name": "parent",
			"type": "string",
			"default": "b9f6d98a-28bc-4d80-90f7-d2f14269e215",
			"description": "The parent category of the groups",
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Create Group Category"
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
						"Groups"
					],
					"operation": [
						"Create Group Category"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/categories/{groupCategoryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Delete Group Category"
					]
				}
			}
		},
		{
			"displayName": "Group Category ID",
			"name": "groupCategoryId",
			"required": true,
			"default": "e0a311fa-f7b2-4f9e-89a9-db517b9c6b90",
			"type": "string",
			"description": "Group category id",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Delete Group Category"
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
						"Groups"
					],
					"operation": [
						"Delete Group Category"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/categories/{groupCategoryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Get Group Category Details"
					]
				}
			}
		},
		{
			"displayName": "Group Category ID",
			"name": "groupCategoryId",
			"required": true,
			"default": "e0a311fa-f7b2-4f9e-89a9-db517b9c6b90",
			"type": "string",
			"description": "Group category id",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Get Group Category Details"
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
						"Groups"
					],
					"operation": [
						"Get Group Category Details"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/categories/{groupCategoryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Group Category"
					]
				}
			}
		},
		{
			"displayName": "Group Category ID",
			"name": "groupCategoryId",
			"required": true,
			"default": "e0a311fa-f7b2-4f9e-89a9-db517b9c6b90",
			"type": "string",
			"description": "Group category id",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Group Category"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Nodes by hardware provider",
			"description": "Group category description",
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
						"Groups"
					],
					"operation": [
						"Update Group Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Hardware groups",
			"description": "Name of the group category",
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
						"Groups"
					],
					"operation": [
						"Update Group Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Parent",
			"name": "parent",
			"type": "string",
			"default": "b9f6d98a-28bc-4d80-90f7-d2f14269e215",
			"description": "The parent category of the groups",
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Group Category"
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
						"Groups"
					],
					"operation": [
						"Update Group Category"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/tree",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Get Group Tree"
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
						"Groups"
					],
					"operation": [
						"Get Group Tree"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{groupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Delete Group"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"required": true,
			"description": "Id of the group",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Delete Group"
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
						"Groups"
					],
					"operation": [
						"Delete Group"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{groupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Group Details"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"required": true,
			"description": "Id of the group",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Group Details"
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
						"Groups"
					],
					"operation": [
						"Group Details"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{groupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Group"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"required": true,
			"description": "Id of the group",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Group"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "string",
			"default": "e17ecf6a-a9f2-44de-a97c-116d24d30ff4",
			"description": "Id of the new group's category",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Group"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Documentation for the group",
			"description": "Group description",
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
						"Groups"
					],
					"operation": [
						"Update Group"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "Ubuntu 18.04 nodes",
			"description": "Name of the group",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Group"
					]
				}
			}
		},
		{
			"displayName": "Dynamic",
			"name": "dynamic",
			"type": "boolean",
			"default": true,
			"description": "Should the group be dynamically refreshed (if not, it is a static group)",
			"routing": {
				"send": {
					"property": "dynamic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Group"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Enable or disable the group",
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
						"Groups"
					],
					"operation": [
						"Update Group"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"type": "json",
			"default": "{\n  \"composition\": \"and\",\n  \"select\": \"node\",\n  \"where\": [\n    {\n      \"attribute\": \"OS\",\n      \"comparator\": \"eq\",\n      \"objectType\": \"node\",\n      \"value\": \"Linux\"\n    }\n  ]\n}",
			"description": "The criteria defining the group. If not provided, the group will be empty.",
			"routing": {
				"send": {
					"property": "query",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Group"
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
						"Groups"
					],
					"operation": [
						"Update Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{groupId}/reload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Reload Group"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"required": true,
			"description": "Id of the group",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Reload Group"
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
						"Groups"
					],
					"operation": [
						"Reload Group"
					]
				}
			}
		},
];
