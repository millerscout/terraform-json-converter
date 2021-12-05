
# terraform-json-converter

A Module convertes custom strctured representation of terraform into hcl terraform template

## Installing
Using npm
```bash
$ npm i terraform-json-converter
```
Using yarn
```bash
$ yarn add terraform-json-converter
```

## Usage example
```js
const terraformJsonParser = require('terraform-json-converter')

const terraformCustomJson = {
    ec2: {
        source: 'git:github.com:nithinpachday/terraform-json-converter.git',
        ami_id: 'ami-icvcv345498',
        aws_region: 'us-east-1',
        description: 'Test ec2 module custom json',
        resource_tags: {
            ApplicationName: 'TestApplicationName',
            CostCenter: '0000',
        },
        network_interface: [
            {
                device_index: 0,
                network_interface_id: 'sdfsfsdf'
            },
            {
                device_index: 1,
                network_interface_id: 'dgdgdfg'
            }
        ],
        root_block_device: [{
            delete_on_termination: true, 
            volume_size: 20,
            volume_type: 'gp-2'
        }]
    }
}


const hclOutput = terraformJsonParser(terraformCustomJson)
```

## Accepted format Example 
Module converts compatible json to hcl terraform module

#### JSON - Input


```json
{
  "ec2": {
    "source": "git:github.com:nithinpachday/terraform-json-converter.git",
    "ami_id": "ami-icvcv345498",
    "aws_region": "us-east-1",
    "description": "Test ec2 module custom json",
    "resource_tags": {
      "ApplicationName": "TestApplicationName",
      "CostCenter": "0000"
    },
    "network_interface": [
      {
        "device_index": 0,
        "network_interface_id": "eni-sfsfrr6tertcxx"
      },
      {
        "device_index": 1,
        "network_interface_id": "eni-sfsfrr6tertcxx"
      }
    ],
    "root_block_device": [
      {
        "delete_on_termination": true,
        "volume_size": 20,
        "volume_type": "gp-2"
      }
    ]
  }
}
```

####  HCL Output,

```hcl
module "ec2" {
        source         =    "git:github.com:nithinpachday/terraform-json-converter.git" 
        ami_id         =    "ami-icvcv345498" 
        aws_region     =    "us-east-1" 
        description    =    "Test ec2 module custom json" 
        resource_tags  =    {
            ApplicationName  =    "TestApplicationName" 
            CostCenter       =    "0000" 
        }
        network_interface    =     [
            {
                device_index           =    0 
                network_interface_id   =    "sdfsfsdf" 
            },{
                device_index           =    1 
                network_interface_id   =    "dgdgdfg" 
            }
        ]
        root_block_device    =     [
            {
                delete_on_termination    =    true 
                volume_size              =    20 
                volume_type              =    "gp-2" 
            }
        ]
 }
```

## License
[MIT](https://github.com/nithinpachday/terraform-json-converter/blob/main/LICENSE)
