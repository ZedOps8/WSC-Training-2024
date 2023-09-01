const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb"); // ES Modules import
const client = new DynamoDBClient({ region: "eu-north-1" });

let getDataFromDynamoDB = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const params = {
                TableName: "students",
                Key: {
                    "student_id": { S: "1" }
                }
            };
            const command = new GetItemCommand(params);
            const response = await client.send(command);
            console.log(response);
            return resolve(response);
        } catch (error) {
            console.log(`Error: ${error}`);
            return reject(error);
        }
    });
}

module.exports = {
    getDataFromDynamoDB
}