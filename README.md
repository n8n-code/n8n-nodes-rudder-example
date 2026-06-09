# @n8n-dev/n8n-nodes-rudder-example

![rudder-example Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-rudder-example.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-rudder-example)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing rudder-example API integrations by hand.**

Every time you connect n8n to rudder-example, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to rudder-example took 5 minutes, not half a day?**

This node gives you **20+ resources** out of the box: **API Info**, **Status**, **Compliance**, **Rules**, **Directives**, and 15 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-rudder-example
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-rudder-example`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **rudder-example API** → paste your API key
3. Drag the **rudder-example** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>API Info</b> (3 operations)</summary>

- Get List all endoints
- Get information about one API endpoint
- Get information on endpoint in a section

</details>

<details>
<summary><b>Status</b> (1 operations)</summary>

- Get Check if Rudder is alive

</details>

<details>
<summary><b>Compliance</b> (5 operations)</summary>

- Get Global compliance
- Get Compliance details for all nodes
- Get Compliance details by node
- Get Compliance details for all rules
- Get Compliance details by rule

</details>

<details>
<summary><b>Rules</b> (10 operations)</summary>

- Get List all rules
- Put Create a rule
- Put Create a rule category
- Delete group category
- Get rule category details
- Post Update rule category details
- Get rules tree
- Delete a rule
- Get a rule details
- Post Update a rule details

</details>

<details>
<summary><b>Directives</b> (6 operations)</summary>

- Get List all directives
- Put Create a directive
- Delete a directive
- Get directive details
- Post Update a directive details
- Post Check that update on a directive is valid

</details>

<details>
<summary><b>Techniques</b> (15 operations)</summary>

- Get List methods
- Post Reload methods
- Get List all techniques
- Put Create technique
- Get List categories
- Post Reload techniques
- Get List versions
- Get Technique metadata by ID
- Get List all directives based on a technique
- Delete technique
- Get Technique metadata by version and ID
- Post Update technique
- Get List all directives based on a version of a technique
- Get Technique s resources
- Get Technique s revisions

</details>

<details>
<summary><b>Groups</b> (11 operations)</summary>

- Get List all groups
- Put Create a group
- Put Create a group category
- Delete group category
- Get group category details
- Post Update group category details
- Get groups tree
- Delete a group
- Get group details
- Post Update group details
- Post Reload a group

</details>

<details>
<summary><b>Nodes</b> (11 operations)</summary>

- Get List managed nodes
- Put Create one or several new nodes
- Post Trigger an agent run on all nodes
- Get List pending nodes
- Post Update pending Node status
- Get nodes acceptation status
- Delete a node
- Get information about a node
- Post Update node settings and properties
- Post Trigger an agent run
- Get inherited node properties for a node

</details>

<details>
<summary><b>Inventories</b> (5 operations)</summary>

- Get information about inventory processing queue
- Post Upload an inventory for processing
- Post Restart inventory watcher
- Post Start inventory watcher
- Post Stop inventory watcher

</details>

<details>
<summary><b>Parameters</b> (5 operations)</summary>

- Get List all global parameters
- Put Create a new parameter
- Delete a parameter
- Get the value of a parameter
- Post Update a parameter s value

</details>

<details>
<summary><b>Archives</b> (2 operations)</summary>

- Get a ZIP archive of the requested items and their dependencies
- Post Import a ZIP archive of policies into Rudder

</details>

<details>
<summary><b>Settings</b> (6 operations)</summary>

- Get List all settings
- Get allowed networks for a policy server
- Post Set allowed networks for a policy server
- Post Modify allowed networks for a policy server
- Get the value of a setting
- Post Set the value of a setting

</details>

<details>
<summary><b>System</b> (13 operations)</summary>

- Get List archives
- Post Create an archive
- Post Restore an archive
- Get an archive as a ZIP
- Get healthcheck
- Get server information
- Post Trigger batch for cleaning unreferenced software
- Post Trigger a new policy generation
- Post Reload both techniques and dynamic groups
- Post Reload dynamic groups
- Post Reload techniques
- Get server status
- Post Trigger update of policies

</details>

<details>
<summary><b>🧩 Change Requests</b> (8 operations)</summary>

- Get List all change requests
- Delete Decline a request details
- Get a change request details
- Post Update a request details
- Post Accept a request details
- Get List user
- Post Update validated user list
- Delete Remove an user from validated user list

</details>

<details>
<summary><b>🧩 CVE</b> (8 operations)</summary>

- Get all CVE details
- Post Trigger a CVE check
- Get CVE check config
- Post Update cve check config
- Get last CVE check result
- Post Get a list of CVE details
- Post Update CVE database from remote source
- Post Update CVE database from file system

</details>

<details>
<summary><b>🧩 Data Sources</b> (9 operations)</summary>

- Get List all data sources
- Put Create a data source
- Post Update properties from data sources
- Post Update properties from data sources
- Delete a data source
- Get data source configuration
- Post Update a data source configuration
- Post Update properties for one node from all data sources
- Post Update properties for one node from a data source

</details>

<details>
<summary><b>🧩 Scale Out Relay</b> (2 operations)</summary>

- Post Demote a relay to simple node
- Post Promote a node to relay

</details>

<details>
<summary><b>🧩 User Management</b> (6 operations)</summary>

- Post Add user
- Get List all roles
- Post Update user s infos
- Get List all users
- Get Reload user
- Delete an user

</details>

<details>
<summary><b>🧩 Branding</b> (3 operations)</summary>

- Get branding configuration
- Post Update web interface customization
- Post Reload branding file

</details>

<details>
<summary><b>🧩 Secret Management</b> (5 operations)</summary>

- Get List all secrets
- Post Update a secret
- Put Create a secret
- Delete a secret
- Get one secret

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from rudder-example docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official rudder-example OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **rudder-example** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the rudder-example API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
