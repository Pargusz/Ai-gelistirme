# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUser, getUser, createCollection, listCollections } from '@dataconnect/generated';


// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation GetUser: 
const { data } = await GetUser(dataConnect);

// Operation CreateCollection:  For variables, look at type CreateCollectionVars in ../index.d.ts
const { data } = await CreateCollection(dataConnect, createCollectionVars);

// Operation ListCollections: 
const { data } = await ListCollections(dataConnect);


```