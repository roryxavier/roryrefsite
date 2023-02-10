<script>
	// import UnderConstruction from '../../../comps/UnderConstruction.svelte';
	import ResponsiveContainer from '../../comps/common/ResponsiveContainer.svelte';
	import Fursonas from '../../vars/Fursonas';
	import TableTitle from './Table-Title.svelte';
	import TableRow from './Table-Row.svelte';
	import DropDownCard from '../../comps/common/DropDownCard.svelte';
	import * as quickFacts from '../../vars/Quickfact';

	const roryInfo = Fursonas.find((fur) => fur.name === 'Rory Chris');

	// Test if it last element
	let isLast = (a, index) => index === a.length - 1;
</script>

<main>
	<ResponsiveContainer>
		<div class="Section">
			{#if roryInfo}
				<TableTitle title="General" />
				<table class="w-full table-fixed" style="border-bottom: 1px solid indigo">
					<TableRow key="Key" value="Value" isTitle={true} />
					{#each roryInfo.generalProperties as property}
						<TableRow key={property.key} value={property.value} />
					{/each}
				</table>
			{/if}
		</div>

		<div class="Section">
			<TableTitle title="Personality" id_tag="personality" />

			<DropDownCard title="QuickFacts">
				<div class="grid md:grid-cols-2 sm:grid-cols-1 pl-5 pr-5">
					{#each quickFacts.Personality as quick}
						<li>{quick}</li>
					{/each}
				</div>
			</DropDownCard>

			<br />
			<div id="personality-text" class="flex flex-col space-y-3 text-lg text-justify">
				<p>
					Rory, the blue wolf, is known for his cheerful and happy-go-lucky personality, which is
					paired with his high level of empathy. Despite being an introvert and shy. Rory has a
					genuine desire to make those around him happy. He uses his empathetic nature to connect
					with others and understand their feelings, and goes out of his way to bring joy and cheer
					to his friends.
				</p>
				<p>
					His warm and friendly demeanor has earned him the love and admiration of those in his
					inner circle. He is always there to listen and offer support, and his kind and caring
					personality makes people feel at ease. Whether it's through his words, actions, or simply
					his infectious smile, Rory never fails to bring happiness to those.
				</p>

				<p>
					He's empathetic nature and desire to help others is truly inspiring, and it's one of the
					things that makes him such a special and unique individual. He has a heart full of love
					and compassion, and he uses his talents and abilities to bring happiness to those around
					him. Whether it's through his words, actions, or simply his infectious smile. He is truly
					a friend to cherish and a source of constant inspiration to all those who know him.
				</p>
			</div>

			<TableTitle title="Hobbies" id_tag="hobbies" />
			<DropDownCard title="QuickFacts">
				<div class="grid md:grid-cols-2 sm:grid-cols-1 pl-5 pr-5">
					{#each quickFacts.Hobbies as quick}
						<li>{quick}</li>
					{/each}
				</div>
			</DropDownCard>
			<br />

			<div id="hobbies-text" class="flex flex-col space-y-3 text-lg text-justify">
				<p>
					Rory is a computer nerd who has a deep love and passion for programming and all things
					computer-related. He is constantly thinking and playing with computer parts and has spent
					countless hours learning the inner workings of these machines. His inquisitive nature,
					however, got him into trouble when he was younger, as he often opened and destroyed
					countless PCs, much to the annoyance of his parents. Despite these setbacks, Rory's focus
					was always on programming, and he has a deep desire to build something great one day and
					show the world his creations.
				</p>
				<p>
					Aside from his love for computers, Rory has a passion for travel. Before the global
					pandemic, his parents would take him on trips to different countries, which sparked his
					interest in seeing more of the world. He dreams of one day traveling with a companion and
					has a natural love for planning, which is a byproduct of his love for travel. He wants to
					make sure everything is well-prepared and that nothing goes wrong during his adventures.
				</p>
				<p>
					Cooking is another passion of Rory's. He loves experimenting with new dishes and trying
					out new recipes. His favorite food is Chicken Fried Rice, but he also has a fondness for
					pizza, pasta, smash burgers, and Mac & Cheese. He has a fur friend who is a good cook and
					has been helping him improve his own cooking skills. Despite the occasional arguments and
					frustration, this friend has been a constant source of inspiration and encouragement for
					Rory. One food he dislikes is fish, and he will go out of his way to avoid it.
				</p>

				<TableTitle title="Food & Drinks" id_tag="food_drinks" />
				<DropDownCard title="QuickFacts">
					<div class="grid md:grid-cols-2 sm:grid-cols-1 pl-5 pr-5">
						{#each quickFacts.FoodDrinks as quick}
							<li>{quick}</li>
						{/each}
					</div>
				</DropDownCard>
				<div id="food-drink" class="flex flex-col space-y-3 text-lg text-justify">
					<p>
						Rory has a unique way of starting his day, he opts for a cup of warm and comforting
						chocolate coffee instead of the conventional plain coffee. Unlike many coffee lovers,
						Rory has a distaste for bitter coffee, which is why he cannot drink coffee without a
						touch of sweetness. This love for coffee has led him to develop aspirations of brewing
						his own coffee in the future, rather than relying on store-bought options.
					</p>
					<p>
						He is also a food enthusiast, and he enjoys cooking a variety of dishes, with fried
						noodles or rice being one of his favorites. He has a special affinity for western-style
						cuisine, such as Mac and Cheese, burgers, chicken chops, and lasagna. He has even
						learned to make these dishes from one of his foodie friends. In the evening.
					</p>
					<p>
						He satisfies his sweet tooth with a glass of chocolate milk, rounding off his day with a
						comforting and indulgent treat.
					</p>
				</div>
			</div>
		</div>
	</ResponsiveContainer>
</main>

<style lang="scss">
	.Section {
		margin-bottom: 2rem;
	}
</style>
