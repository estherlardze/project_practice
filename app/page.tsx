import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import Navbar from "@/component/Navbar";

export default async function Home() {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.getStory("landing", {
        version: "draft",
    });

    return (
        <div>
            <Navbar />
            <StoryblokStory story={data.story} />
        </div>
    );
}
