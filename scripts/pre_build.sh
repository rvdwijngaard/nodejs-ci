﻿ wget http://dynamodb-local.s3-website-us-west-2.amazonaws.com/dynamodb_local_latest.tar.gz -O /tmp/dynamodb_local_latest.tar.gz
 tar -xzf /tmp/dynamodb_local_latest.tar.gz -C /tmp
 java -Djava.library.path=/tmp/DynamoDBLocal_lib -jar /tmp/DynamoDBLocal.jar -inMemory  & sleep 2