export type User = {
  name: string;
  username: string;
  inviteCode: string;
  invitedBy?: string;
};

const users: User[] = [
  { name: "John Doe", username: "johnDoe", inviteCode: "abc" },
  { name: "Kihlaj", username: "kihlaj", inviteCode: "def", invitedBy: "abc" },
  { name: "Emma Smith", username: "emmaSmith", inviteCode: "ghi", invitedBy: "abc" },
  { name: "Another User", username: "anotherUser", inviteCode: "xyz" },
  // Add more user objects as needed
];


const MYSELF = "kihlaj";

function checkInvitation(users: User[]): boolean {
  const myUser = users.find(user => user.username === MYSELF);

  if (myUser && myUser.invitedBy) {
    return users.some(user => user.inviteCode === myUser.invitedBy);
  }

  return false;
}


const isInvited = checkInvitation(users);
console.log("Am I invited?", isInvited); // Output: Am I invited? true or false