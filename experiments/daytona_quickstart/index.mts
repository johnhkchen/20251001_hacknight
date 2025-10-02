import { Daytona } from '@daytonaio/sdk';

// Initialize the Daytona client
const daytona = new Daytona({ apiKey: 'dtn_396e13590552652ac45da0f70fa1fc4975e554eb0534e6adae9640f57105b525' });

// Create the Sandbox instance
const sandbox = await daytona.create({
  language: 'typescript',
});

// Run the code securely inside the Sandbox
const response = await sandbox.process.codeRun('console.log("Hello World from code!")')
console.log(response.result);

// Clean up
await sandbox.delete()
