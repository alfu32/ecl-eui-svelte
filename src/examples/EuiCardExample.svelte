
<!-- file: "src/examples/EuiCardExample.svelte" -->
<script lang="ts">
    import Example from "../Example.svelte";
    import Code from "../Code.svelte";
    import EuiChip from "../lib/EuiChip.svelte";
    import EuiCard from "../lib/EuiCard.svelte";
    import EuiCardHeader from "../lib/EuiCardHeader.svelte";
    import EuiLabel from "../lib/EuiLabel.svelte";
    import EuiButton from "../lib/EuiButton.svelte";
    import EuiIcon from "../lib/EuiIcon.svelte";
    import EuiList from "../lib/EuiList.svelte";
    import EuiListItem from "../lib/EuiListItem.svelte";
    import SampleComponent from './sample-component.svelte'
    import { later } from "../string-util";

    let cardTitle = "Title goes here";
    let cardSubtitle = "Secondary subtitle text";
    const onMenuItemClicked = (p)=>(e)=>{alert(`menu item ${p} clicked !`)}
    const onCardTitleLinkClicked = (e)=>{alert(`card title clicked !`)}

    let card:EuiCard;
    let cardCollapsed=false;
    async function getCardRef(){
        return await later<EuiCard>(()=>{
            console.log({card})
            return card
        },1000)
    }
</script>
<Example title="EuiCard" phase="test">
    <h6 class="section-title eui-u-mt-m">Showing card header title, subtitle and card content</h6>
    <EuiCard>
        <div slot="title">{cardTitle}</div>
        <div slot="subtitle">{cardSubtitle}</div>
        <div>
            I am the content of the card container...
        </div>
        <small>
            I am the fineprint of the card container...
        </small>
    </EuiCard>
    <Code value={`
        <h6 class="section-title eui-u-mt-m">Showing card header title, subtitle and card content</h6>
        <EuiCard>
            <div slot="title">{cardTitle}</div>
            <div slot="subtitle">{cardSubtitle}</div>
            <div>
                I am the content of the card container...
            </div>
            <small>
                I am the fineprint of the card container...
            </small>
        </EuiCard>
    `}></Code>

    <h6 class="section-title">Displayed card sections: header - header body - content - footer</h6>
    Features :<br>
    <div class="eui-u-ml-m eui-u-mb-m">
        <li>header with title and subtitle with link on Title</li>
        <li>optional header-body with custom content</li>
        <li>optional card content style height set</li>
        <li>optional and custom footer's content with action buttons, icons, tooltip text and local menu</li>
    </div>

    <EuiCard>
        <EuiCardHeader slot="cardHeader">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <a slot="title" on:click={onCardTitleLinkClicked} href="./#">{cardTitle}</a>
                <div slot="subtitle">{cardSubtitle}</div>
                <div class="eui-u-flex">
                    Header body...
                    <div class="eui-u-ml-auto">
                        <EuiChip kind=secondary euiRounded euiOutline euiSizeS><EuiLabel>Dog Breed</EuiLabel></EuiChip>
                    </div>
                </div>
        </EuiCardHeader>

        <div style="cardContentStyle">
            The <strong>Shiba Inu</strong> is a Japanese breed of hunting dog. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan.
            A small, agile dog that copes very well with mountainous terrain and hiking trails, the <a href="https://en.wikipedia.org/wiki/Shiba_Inu" target="_blank">Shiba Inu</a> was originally bred for hunting.
            <p>It looks similar to and is often mistaken for other Japanese dog breeds like the Akita Inu or Hokkaido, but the Shiba Inu is a different breed with a distinct blood line, temperament, and smaller size than other Japanese dog breeds.</p>
        </div>

        <div slot="actionButtons">
            <EuiButton kind=primary>Action 1</EuiButton>
            <EuiButton kind=secondary>Action 2</EuiButton>
        </div>

        <div slot="actionIcons">
            <!--euiTooltip="Mark as favourite" -->
            <EuiButton euiRounded euiIconButton euiBasicButton kind=secondary ariaLabel="Mark as favourite">
                <EuiIcon class="eui-icon eui-icon-star"></EuiIcon>
            </EuiButton>
            <!--euiTooltip="Share"-->
            <EuiButton euiRounded euiIconButton euiBasicButton kind=secondary  ariaLabel="Share">
                <EuiIcon class="eui-icon eui-icon-share"></EuiIcon>
            </EuiButton>
        </div>

        <div slot="actionMenu"><!-- [tooltipText]="'More options'" -->
            <EuiList>
                <EuiListItem on:click={onMenuItemClicked(1)}>Menu item 1</EuiListItem>
                <EuiListItem on:click={onMenuItemClicked(2)}>Menu item 2</EuiListItem>
                <EuiListItem on:click={onMenuItemClicked(3)}>Menu item 3</EuiListItem>
            </EuiList>
        </div>
    </EuiCard>
    <Code value={`
        <h6 class="section-title">Displayed card sections: header - header body - content - footer</h6>
        Features :<br>
        <div class="eui-u-ml-m eui-u-mb-m">
            <li>header with title and subtitle with link on Title</li>
            <li>optional header-body with custom content</li>
            <li>optional card content style height set</li>
            <li>optional and custom footer's content with action buttons, icons, tooltip text and local menu</li>
        </div>

        <EuiCard>
            <EuiCardHeader slot="cardHeader">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <a slot="title" on:click={onCardTitleLinkClicked} href="./#">{cardTitle}</a>
                    <div slot="subtitle">{cardSubtitle}</div>
                    <div class="eui-u-flex">
                        Header body...
                        <div class="eui-u-ml-auto">
                            <EuiChip kind=secondary euiRounded euiOutline euiSizeS><EuiLabel>Dog Breed</EuiLabel></EuiChip>
                        </div>
                    </div>
            </EuiCardHeader>

            <div style="cardContentStyle">
                The <strong>Shiba Inu</strong> is a Japanese breed of hunting dog. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan.
                A small, agile dog that copes very well with mountainous terrain and hiking trails, the <a href="https://en.wikipedia.org/wiki/Shiba_Inu" target="_blank">Shiba Inu</a> was originally bred for hunting.
                <p>It looks similar to and is often mistaken for other Japanese dog breeds like the Akita Inu or Hokkaido, but the Shiba Inu is a different breed with a distinct blood line, temperament, and smaller size than other Japanese dog breeds.</p>
            </div>

            <div slot="actionButtons">
                <EuiButton kind=primary>Action 1</EuiButton>
                <EuiButton kind=secondary>Action 2</EuiButton>
            </div>

            <div slot="actionIcons">
                <!--euiTooltip="Mark as favourite" -->
                <EuiButton euiRounded euiIconButton euiBasicButton kind=secondary ariaLabel="Mark as favourite">
                    <EuiIcon class="eui-icon eui-icon-star"></EuiIcon>
                </EuiButton>
                <!--euiTooltip="Share"-->
                <EuiButton euiRounded euiIconButton euiBasicButton kind=secondary  ariaLabel="Share">
                    <EuiIcon class="eui-icon eui-icon-share"></EuiIcon>
                </EuiButton>
            </div>

            <div slot="actionMenu"><!-- [tooltipText]="'More options'" -->
                <EuiList>
                    <EuiListItem on:click={onMenuItemClicked(1)}>Menu item 1</EuiListItem>
                    <EuiListItem on:click={onMenuItemClicked(2)}>Menu item 2</EuiListItem>
                    <EuiListItem on:click={onMenuItemClicked(3)}>Menu item 3</EuiListItem>
                </EuiList>
            </div>
        </EuiCard>
    `}></Code>
    <h6 class="section-title eui-u-mt-m">Using the card header title/subtitle as unique container</h6>
    <EuiCard>
        <span slot=title>Title goes here</span>
        <span slot=subtitle>Secondary subtitle text</span>
    </EuiCard>
    <Code value={`
        <h6 class="section-title eui-u-mt-m">Using the card header title/subtitle as unique container</h6>
        <EuiCard>
            <span slot=title>Title goes here</span>
            <span slot=subtitle>Secondary subtitle text</span>
        </EuiCard>
    `}></Code>
    
    
    <h6 class="section-title">Using the card content as unique container</h6>
    <EuiCard>
        <div class="eui-u-flex">
            <img src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Shiba Inu" class="eui-u-mr-m" style="aspect-ratio: 1; border: 2px solid white; border-radius: 50%; height: 6rem; width: 6rem;">
            <div class="eui-u-ml-auto">
                The <strong>Shiba Inu</strong> is a Japanese breed of hunting dog. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan.
                A small, agile dog that copes very well with mountainous terrain and hiking trails, the <a class="eui-u-text-link-external" href="https://en.wikipedia.org/wiki/Shiba_Inu" target="_blank">Shiba Inu</a> was originally bred for hunting.
                <br><br>
                It looks similar to and is often mistaken for other Japanese dog breeds like the Akita Inu or Hokkaido, but the Shiba Inu is a different breed with a distinct blood line, temperament, and smaller size than other Japanese dog breeds.
            </div>
        </div>
    </EuiCard>
    <Code value={`
        <h6 class="section-title">Using the card content as unique container</h6>
        <EuiCard>
            <div class="eui-u-flex">
                <img src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Shiba Inu" class="eui-u-mr-m" style="aspect-ratio: 1; border: 2px solid white; border-radius: 50%; height: 6rem; width: 6rem;">
                <div class="eui-u-ml-auto">
                    The <strong>Shiba Inu</strong> is a Japanese breed of hunting dog. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan.
                    A small, agile dog that copes very well with mountainous terrain and hiking trails, the <a class="eui-u-text-link-external" href="https://en.wikipedia.org/wiki/Shiba_Inu" target="_blank">Shiba Inu</a> was originally bred for hunting.
                    <br><br>
                    It looks similar to and is often mistaken for other Japanese dog breeds like the Akita Inu or Hokkaido, but the Shiba Inu is a different breed with a distinct blood line, temperament, and smaller size than other Japanese dog breeds.
                </div>
            </div>
        </EuiCard>
    `}></Code>
    <p>By default the <code>OnInit</code> and <code>OnDestroy</code> hooks of the component in the content will be triggered with the ones of the parent page. To prevent this behaviour, a condition can be added on the component, doing that <code>OnInit</code> and <code>OnDestroy</code> will be triggered when the component is displayed and hided.</p>
    <br/>
    <EuiCard bind:this={card} euiCollapsible euiCollapsed>
        <span slot=title>Card title</span>
        <span slot=subtitle>Card subtitle</span>
        <span>
            {#await getCardRef()}
                <span>no card ref</span>
            {:then cardref}
                <pre>{cardref}</pre>
                {#if !cardref.euiCollapsed}<SampleComponent></SampleComponent>{/if}
            {:catch error}
                <pre>ERROR:{error}</pre>
            {/await}
        </span>
    </EuiCard>
    <Code value={`
        <script lang="ts">
            import EuiCard from "../lib/EuiCard.svelte";
            import SampleComponent from './sample-component.svelte'
            import { later } from "../string-util";
            let card:EuiCard;
            let cardCollapsed=false;
            async function getCardRef(){
                return await later<EuiCard>(()=>{
                    console.log({card})
                    return card
                },1000)
            }
        </script>
        <p>By default the <code>OnInit</code> and <code>OnDestroy</code> hooks of the component in the content will be triggered with the ones of the parent page. To prevent this behaviour, a condition can be added on the component, doing that <code>OnInit</code> and <code>OnDestroy</code> will be triggered when the component is displayed and hided.</p>
        <br/>
        <EuiCard bind:this={card} euiCollapsible euiCollapsed>
            <span slot=title>Card title</span>
            <span slot=subtitle>Card subtitle</span>
            <span>
                {#await getCardRef()}
                    <span>no card ref</span>
                {:then cardref}
                    <pre>{cardref}</pre>
                    {#if !cardref.euiCollapsed}<SampleComponent></SampleComponent>{/if}
                {:catch error}
                    <pre>ERROR:{error}</pre>
                {/await}
            </span>
        </EuiCard>
    `}></Code>
</Example>