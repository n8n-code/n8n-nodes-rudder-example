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

| Resource | Operations |
|----------|------------|
| API Info | Get list all endoints, Get information about one api endpoint, Get information on endpoint in a section |
| Status | Get check if rudder is alive |
| Compliance | Get global compliance, Get compliance details for all nodes, Get compliance details by node, Get compliance details for all rules, Get compliance details by rule |
| Rules | Get list all rules, Put create a rule, Put create a rule category, Delete group category, Get rule category details, Post update rule category details, Get rules tree, Delete a rule, Get a rule details, Post update a rule details |
| Directives | Get list all directives, Put create a directive, Delete a directive, Get directive details, Post update a directive details, Post check that update on a directive is valid |
| Techniques | Get list methods, Post reload methods, Get list all techniques, Put create technique, Get list categories, Post reload techniques, Get list versions, Get technique metadata by id, Get list all directives based on a technique, Delete technique, Get technique metadata by version and id, Post update technique, Get list all directives based on a version of a technique, Get techniques resources, Get techniques revisions |
| Groups | Get list all groups, Put create a group, Put create a group category, Delete group category, Get group category details, Post update group category details, Get groups tree, Delete a group, Get group details, Post update group details, Post reload a group |
| Nodes | Get list managed nodes, Put create one or several new nodes, Post trigger an agent run on all nodes, Get list pending nodes, Post update pending node status, Get nodes acceptation status, Delete a node, Get information about a node, Post update node settings and properties, Post trigger an agent run, Get inherited node properties for a node |
| Inventories | Get information about inventory processing queue, Post upload an inventory for processing, Post restart inventory watcher, Post start inventory watcher, Post stop inventory watcher |
| Parameters | Get list all global parameters, Put create a new parameter, Delete a parameter, Get the value of a parameter, Post update a parameters value |
| Archives | Get a zip archive of the requested items and their dependencies, Post import a zip archive of policies into rudder |
| Settings | Get list all settings, Get allowed networks for a policy server, Post set allowed networks for a policy server, Post modify allowed networks for a policy server, Get the value of a setting, Post set the value of a setting |
| System | Get list archives, Post create an archive, Post restore an archive, Get an archive as a zip, Get healthcheck, Get server information, Post trigger batch for cleaning unreferenced software, Post trigger a new policy generation, Post reload both techniques and dynamic groups, Post reload dynamic groups, Post reload techniques, Get server status, Post trigger update of policies |
| 🧩 Change Requests | Get list all change requests, Delete decline a request details, Get a change request details, Post update a request details, Post accept a request details, Get list user, Post update validated user list, Delete remove an user from validated user list |
| 🧩 CVE | Get all cve details, Post trigger a cve check, Get cve check config, Post update cve check config, Get last cve check result, Post get a list of cve details, Post update cve database from remote source, Post update cve database from file system |
| 🧩 Data Sources | Get list all data sources, Put create a data source, Post update properties from data sources, Post update properties from data sources, Delete a data source, Get data source configuration, Post update a data source configuration, Post update properties for one node from all data sources, Post update properties for one node from a data source |
| 🧩 Scale Out Relay | Post demote a relay to simple node, Post promote a node to relay |
| 🧩 User Management | Post add user, Get list all roles, Post update users infos, Get list all users, Get reload user, Delete an user |
| 🧩 Branding | Get branding configuration, Post update web interface customization, Post reload branding file |
| 🧩 Secret Management | Get list all secrets, Post update a secret, Put create a secret, Delete a secret, Get one secret |

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
