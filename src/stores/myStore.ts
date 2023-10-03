import { defineStore } from 'pinia'

export interface User {
  ID: string
  name: string
  type: string
  date: string
  gender: string
  inWork: boolean
  desc: string
  skils: []
}


export const useMyStore = defineStore('myStore', {

  state: () => ({
    users: <User[]>[],
  }),

  getters: {
    inWorkUsersCount({ users }) : number {
      return users.filter(({ inWork }) => inWork).length
    },
    menUsersCount({ users }) : number {
      return users.filter(({ gender }) => gender === 'Male').length
    },
    womenUsersCount({ users }) : number {
      return users.filter(({ gender }) => gender === 'Female').length
    },
    usersCount({ users }) : number {
      return users.length
    },
    getUserById({ users }): (id: string) => User | undefined {
      return (id: string): User | undefined => {
        return users.find((user) => user.ID === id)
      }
    },
  },

  actions: {
    createNewUser(user: User) {
      if (!user) return;
      this.users.push(user);
    },
    deleteUserById(id: string){
      const userIndex = this.users.findIndex(user => user.ID === id);
      if (userIndex !== -1) {
        this.users.splice(userIndex, 1);
      } else {
        console.warn(`No user found with id ${id}`);

      }
    },
  }
})
