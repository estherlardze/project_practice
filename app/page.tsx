import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
export default async function Home() {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.getStory("landing", {
        version: "draft",
    });

    

    // console.log(data.story.content);

    return (
        <div>
            <StoryblokStory story={data.story} />
        </div>
    );
}
