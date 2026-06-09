import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apiInfoDescription } from './resources/api-info';
import { statusDescription } from './resources/status';
import { complianceDescription } from './resources/compliance';
import { rulesDescription } from './resources/rules';
import { directivesDescription } from './resources/directives';
import { techniquesDescription } from './resources/techniques';
import { groupsDescription } from './resources/groups';
import { nodesDescription } from './resources/nodes';
import { inventoriesDescription } from './resources/inventories';
import { parametersDescription } from './resources/parameters';
import { archivesDescription } from './resources/archives';
import { settingsDescription } from './resources/settings';
import { systemDescription } from './resources/system';
import { changeRequestsDescription } from './resources/change-requests';
import { cveDescription } from './resources/cve';
import { dataSourcesDescription } from './resources/data-sources';
import { scaleOutRelayDescription } from './resources/scale-out-relay';
import { userManagementDescription } from './resources/user-management';
import { brandingDescription } from './resources/branding';
import { secretManagementDescription } from './resources/secret-management';

export class RudderExample implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'rudder-example',
		name: 'N8nDevRudderExample',
		icon: { light: 'file:./rudder-example.png', dark: 'file:./rudder-example.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Download OpenAPI specification: openapi.yml',
		defaults: { name: 'rudder-example' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevRudderExampleApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "API Info",
					"value": "API Info",
					"description": "Information about API endpoints and versions"
				},
				{
					"name": "Status",
					"value": "Status",
					"description": "Is alive check"
				},
				{
					"name": "Compliance",
					"value": "Compliance",
					"description": "Access compliance data"
				},
				{
					"name": "Rules",
					"value": "Rules",
					"description": "Rules management"
				},
				{
					"name": "Directives",
					"value": "Directives",
					"description": "Directives management"
				},
				{
					"name": "Techniques",
					"value": "Techniques",
					"description": "Techniques management"
				},
				{
					"name": "Groups",
					"value": "Groups",
					"description": "Groups management"
				},
				{
					"name": "Nodes",
					"value": "Nodes",
					"description": "Nodes management"
				},
				{
					"name": "Inventories",
					"value": "Inventories",
					"description": "Inventory processing service"
				},
				{
					"name": "Parameters",
					"value": "Parameters",
					"description": "Global parameters"
				},
				{
					"name": "Archives",
					"value": "Archives",
					"description": "Import and export zip of policies"
				},
				{
					"name": "Settings",
					"value": "Settings",
					"description": "Server configuration"
				},
				{
					"name": "System",
					"value": "System",
					"description": "Internal components and administration"
				},
				{
					"name": "🧩 Change Requests",
					"value": "🧩 Change Requests",
					"description": "**Requires that the `changes-validation` plugin is installed on the server.**\n\nManage change requests."
				},
				{
					"name": "🧩 CVE",
					"value": "🧩 CVE",
					"description": "**Requires that the `cve` plugin is installed on the server.**\n\nManage CVE plugins data and configuration."
				},
				{
					"name": "🧩 Data Sources",
					"value": "🧩 Data Sources",
					"description": "**Requires that the `datasources` plugin is installed on the server.**\n\nData sources plugin configuration."
				},
				{
					"name": "🧩 Scale Out Relay",
					"value": "🧩 Scale Out Relay",
					"description": "**Requires that the `scale-out-relay` plugin is installed on the server.**\n\nManage relays."
				},
				{
					"name": "🧩 User Management",
					"value": "🧩 User Management",
					"description": "**Requires that the `user-management` plugin is installed on the server.**\n\nManage users settings and configuration file."
				},
				{
					"name": "🧩 Branding",
					"value": "🧩 Branding",
					"description": "**Requires that the `branding` plugin is installed on the server.**\n\nManage web interface customization."
				},
				{
					"name": "🧩 Secret Management",
					"value": "🧩 Secret Management",
					"description": "**Requires that the `secret-management` plugin is installed on the server.**\n\nManage secrets variables."
				}
			],
			"default": ""
		},
		...apiInfoDescription,
		...statusDescription,
		...complianceDescription,
		...rulesDescription,
		...directivesDescription,
		...techniquesDescription,
		...groupsDescription,
		...nodesDescription,
		...inventoriesDescription,
		...parametersDescription,
		...archivesDescription,
		...settingsDescription,
		...systemDescription,
		...changeRequestsDescription,
		...cveDescription,
		...dataSourcesDescription,
		...scaleOutRelayDescription,
		...userManagementDescription,
		...brandingDescription,
		...secretManagementDescription
		],
	};
}
