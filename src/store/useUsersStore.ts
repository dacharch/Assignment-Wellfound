import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { User } from "../types/user";
import { usersMock } from "../mocks/users";

type Filters = {
  name: string;
  status: "all" | "active" | "inactive";
  sortBy: "name" | "createdAt";
  sortDir: "asc" | "desc";
};

type UserStore = {
  users: User[];
  filters: Filters;
  loading: boolean;

  // Actions
  setFilters: (patch: Partial<Filters>) => void;
  updateUser: (id: string, patch: Partial<User>) => void;
  getById: (id: string) => User | undefined;

  // load data
  loadUsers: () => void;


  reload: () => void;
};

export const useUsersStore = create<UserStore>()(
  devtools((set, get) => ({
    users: [],            
    loading: false,

    filters: {
      name: "",
      status: "all",
      sortBy: "createdAt",
      sortDir: "desc",
    },

    setFilters: (patch) =>
      set((state) => ({
        filters: { ...state.filters, ...patch },
      })),

    updateUser: (id, patch) =>
      set((state) => ({
        users: state.users.map((u) =>
          u.id === id ? { ...u, ...patch } : u
        ),
      })),

    getById: (id) => get().users.find((u) => u.id === id),

    loadUsers: () => set({ users: usersMock }),

    reload: () => set({ users: usersMock }),
  }))
);
