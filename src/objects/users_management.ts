import { User } from "./user.ts";

// src/objects/users_management.ts
const adminUser = new User("admin", "admin", 36);
adminUser.logUser();
// adminUser.role; // ! Není možné, role je private

const customerUser = new User("pepa23", "123456", 19);
customerUser.logUser();
