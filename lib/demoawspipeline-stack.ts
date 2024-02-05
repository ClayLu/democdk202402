import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { CodePipeline , CodePipelineSource , ShellStep }  from 'aws-cdk-lib/pipelines';


export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // aws cdcd pipeline
    const democicdpipeline = new CodePipeline(this,'democicdpipeline',{
      synth: new ShellStep('Synth', {
        // Use a connection created using the AWS console to authenticate to GitHub
        // Other sources are available.
        input: CodePipelineSource.gitHub('ClayLu/democdk202402', 'main'),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });





    

  }
}
