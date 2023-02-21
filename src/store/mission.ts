import { defineStore } from 'pinia';

export const useMissionStore = defineStore('mission', {
    state: () => {
        return {
            all: [
                {
                    id: 0,
                    name: '',
                    detail: '',
                    status: '',
                    userId: '',
                    dealline: '',
                    createtime: '',
                    updatetime: '',
                },
            ],
        };
    },
    // 也可以定义为
    // state: () => ({ count: 0 })
    actions: {},
});
