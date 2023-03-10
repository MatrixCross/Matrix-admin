import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const moduleRoutes: Array<RouteRecordRaw> = [
		{
				name: 'workbench',
        path: '/workbench',
        meta: {
            title: '工作台',
        },
        component: () => import('@/view/workbench/index.vue'),
		},
    {
        name: 'personal',
        path: '/personal',
        meta: {
            title: '个人主页',
        },
        component: () => import('@/view/personal/index.vue'),
    },
    {
        name: 'mission',
        path: '/mission',
        meta: {
            title: '任务中心',
        },
        component: () => import('@/view/mission/index.vue'),
    },
    {
        name: 'addMission',
        path: '/addMission',
        meta: {
            title: '新增任务',
        },
        component: () => import('@/view/mission/add.vue'),
    },
		{
			name: 'statistics',
			path: '/statistics',
			meta: {
					title: '统计面板',
			},
			component: () => import('@/view/okr/index.vue'),
		},
		{
			name: 'AI',
			path: '/AI',
			meta: {
					title: '人工智能',
			},
			component: () => import('@/view/AI/index.vue'),
		}
];

export default moduleRoutes;
