import { defineStore } from 'pinia';
import { QueryMission } from '../api/mission';
import { userStore } from './collection';

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
		getters: {
			completeMission(state) {
				return state.all.filter(item => item.status === '1');
			},
			
		},
    // 也可以定义为
    // state: () => ({ count: 0 })
    actions: {
			async updateMission() {
				const res = await QueryMission(userStore.info.userId);
    		this.all = res.data.list;
			}
		},
});
