import { TwitterFollowCard } from './assets/components/TwitterFollowCard.jsx'

const users = [
	{
		userName: 'OliviaMun',
		name: 'Olivia Muñoz',
		isFollowing: true
	},
	{
		userName: 'midudev',
		name: 'Miguel Angel',
		isFollowing: false

	},
	{
		userName: 'pheralb',
		name: 'Pablo Hernandez',
		isFollowing: true

	},
	{
		userName: 'franflores',
		name: 'Fransica Flores',
		isFollowing: false

	}
]
export function App () {
	return (
		<section className='App'>
			{
				users.map(({ userName, name, isFollowing}) => (
					<TwitterFollowCard
						key={userName}
						userName={userName}
						initialIsFollowing={isFollowing}
					>
							{name}
					</TwitterFollowCard>
				))
			}
			

			
		</section>
	)
}

