import type { INodeProperties } from 'n8n-workflow';

export const systemDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					]
				}
			},
			"options": [
				{
					"name": "List Archives",
					"value": "List Archives",
					"action": "List archives",
					"description": "List configuration archives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/system/archives/{{$parameter[\"archiveKind\"]}}"
						}
					}
				},
				{
					"name": "Create Archive",
					"value": "Create Archive",
					"action": "Create an archive",
					"description": "Create new archive of the given kind",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/system/archives/{{$parameter[\"archiveKind\"]}}"
						}
					}
				},
				{
					"name": "Restore Archive",
					"value": "Restore Archive",
					"action": "Restore an archive",
					"description": "Restore an archive of the given kind for the given moment",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/system/archives/{{$parameter[\"archiveKind\"]}}/restore/{{$parameter[\"archiveRestoreKind\"]}}"
						}
					}
				},
				{
					"name": "Get Zip Archive",
					"value": "Get Zip Archive",
					"action": "Get an archive as a ZIP",
					"description": "Get an archive of the given kind as a zip",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/system/archives/{{$parameter[\"archiveKind\"]}}/zip/{{$parameter[\"commitId\"]}}"
						}
					}
				},
				{
					"name": "Get Healthcheck Result",
					"value": "Get Healthcheck Result",
					"action": "Get healthcheck",
					"description": "Run and get the result of all checks",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/system/healthcheck"
						}
					}
				},
				{
					"name": "Get System Info",
					"value": "Get System Info",
					"action": "Get server information",
					"description": "Get information about the server version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/system/info"
						}
					}
				},
				{
					"name": "Purge Software",
					"value": "Purge Software",
					"action": "Trigger batch for cleaning unreferenced software",
					"description": "Start the software cleaning batch asynchronously.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/system/maintenance/purgeSoftware"
						}
					}
				},
				{
					"name": "Regenerate Policies",
					"value": "Regenerate Policies",
					"action": "Trigger a new policy generation",
					"description": "Trigger a full policy generation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/system/regenerate/policies"
						}
					}
				},
				{
					"name": "Reload All",
					"value": "Reload All",
					"action": "Reload both techniques and dynamic groups",
					"description": "Reload both techniques and dynamic groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/system/reload"
						}
					}
				},
				{
					"name": "Reload Groups",
					"value": "Reload Groups",
					"action": "Reload dynamic groups",
					"description": "Reload dynamic groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/system/reload/groups"
						}
					}
				},
				{
					"name": "Reload Techniques",
					"value": "Reload Techniques",
					"action": "Reload techniques",
					"description": "Reload techniques from local technique library",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/system/reload/techniques"
						}
					}
				},
				{
					"name": "Get Status",
					"value": "Get Status",
					"action": "Get server status",
					"description": "Get information about current server status",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/system/status"
						}
					}
				},
				{
					"name": "Update Policies",
					"value": "Update Policies",
					"action": "Trigger update of policies",
					"description": "Update configuration policies if needed",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/system/update/policies"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /system/archives/{archiveKind}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"List Archives"
					]
				}
			}
		},
		{
			"displayName": "Archive Kind",
			"name": "archiveKind",
			"required": true,
			"description": "Type of archive to make",
			"default": "full",
			"type": "options",
			"options": [
				{
					"name": "Full",
					"value": "full"
				},
				{
					"name": "Groups",
					"value": "groups"
				},
				{
					"name": "Rules",
					"value": "rules"
				},
				{
					"name": "Directives",
					"value": "directives"
				},
				{
					"name": "Parameters",
					"value": "parameters"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"List Archives"
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
						"System"
					],
					"operation": [
						"List Archives"
					]
				}
			}
		},
		{
			"displayName": "POST /system/archives/{archiveKind}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Create Archive"
					]
				}
			}
		},
		{
			"displayName": "Archive Kind",
			"name": "archiveKind",
			"required": true,
			"description": "Type of archive to make",
			"default": "full",
			"type": "options",
			"options": [
				{
					"name": "Full",
					"value": "full"
				},
				{
					"name": "Groups",
					"value": "groups"
				},
				{
					"name": "Rules",
					"value": "rules"
				},
				{
					"name": "Directives",
					"value": "directives"
				},
				{
					"name": "Parameters",
					"value": "parameters"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Create Archive"
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
						"System"
					],
					"operation": [
						"Create Archive"
					]
				}
			}
		},
		{
			"displayName": "POST /system/archives/{archiveKind}/restore/{archiveRestoreKind}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Restore Archive"
					]
				}
			}
		},
		{
			"displayName": "Archive Kind",
			"name": "archiveKind",
			"required": true,
			"description": "Type of archive to make",
			"default": "full",
			"type": "options",
			"options": [
				{
					"name": "Full",
					"value": "full"
				},
				{
					"name": "Groups",
					"value": "groups"
				},
				{
					"name": "Rules",
					"value": "rules"
				},
				{
					"name": "Directives",
					"value": "directives"
				},
				{
					"name": "Parameters",
					"value": "parameters"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Restore Archive"
					]
				}
			}
		},
		{
			"displayName": "Archive Restore Kind",
			"name": "archiveRestoreKind",
			"required": true,
			"default": "latestCommit",
			"type": "options",
			"description": "What archive to restore (latest archive, latest commit in configuration repository, or archive with ID as given by listArchive)",
			"options": [
				{
					"name": "Latest Archive",
					"value": "latestArchive"
				},
				{
					"name": "Latest Commit",
					"value": "latestCommit"
				},
				{
					"name": "Archive ID",
					"value": "archive ID"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Restore Archive"
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
						"System"
					],
					"operation": [
						"Restore Archive"
					]
				}
			}
		},
		{
			"displayName": "GET /system/archives/{archiveKind}/zip/{commitId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Get Zip Archive"
					]
				}
			}
		},
		{
			"displayName": "Archive Kind",
			"name": "archiveKind",
			"required": true,
			"description": "Type of archive to make",
			"default": "full",
			"type": "options",
			"options": [
				{
					"name": "Full",
					"value": "full"
				},
				{
					"name": "Groups",
					"value": "groups"
				},
				{
					"name": "Rules",
					"value": "rules"
				},
				{
					"name": "Directives",
					"value": "directives"
				},
				{
					"name": "Parameters",
					"value": "parameters"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Get Zip Archive"
					]
				}
			}
		},
		{
			"displayName": "Commit ID",
			"name": "commitId",
			"required": true,
			"description": "commit ID of the archive to get as a ZIP file",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Get Zip Archive"
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
						"System"
					],
					"operation": [
						"Get Zip Archive"
					]
				}
			}
		},
		{
			"displayName": "GET /system/healthcheck",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Get Healthcheck Result"
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
						"System"
					],
					"operation": [
						"Get Healthcheck Result"
					]
				}
			}
		},
		{
			"displayName": "GET /system/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Get System Info"
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
						"System"
					],
					"operation": [
						"Get System Info"
					]
				}
			}
		},
		{
			"displayName": "POST /system/maintenance/purgeSoftware",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Purge Software"
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
						"System"
					],
					"operation": [
						"Purge Software"
					]
				}
			}
		},
		{
			"displayName": "POST /system/regenerate/policies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Regenerate Policies"
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
						"System"
					],
					"operation": [
						"Regenerate Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /system/reload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Reload All"
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
						"System"
					],
					"operation": [
						"Reload All"
					]
				}
			}
		},
		{
			"displayName": "POST /system/reload/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Reload Groups"
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
						"System"
					],
					"operation": [
						"Reload Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /system/reload/techniques",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Reload Techniques"
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
						"System"
					],
					"operation": [
						"Reload Techniques"
					]
				}
			}
		},
		{
			"displayName": "GET /system/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Get Status"
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
						"System"
					],
					"operation": [
						"Get Status"
					]
				}
			}
		},
		{
			"displayName": "POST /system/update/policies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"System"
					],
					"operation": [
						"Update Policies"
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
						"System"
					],
					"operation": [
						"Update Policies"
					]
				}
			}
		},
];
