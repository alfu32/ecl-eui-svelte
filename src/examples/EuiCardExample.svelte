
<!-- file: "src/examples/EuiCardExample.svelte" -->
<script lang="ts">
    import Example from "../Example.svelte";
    import Code from "../Code.svelte";
    import EuiCard from "../lib/EuiCard.svelte";
    import EuiCardHeader from "../lib/EuiCardHeader.svelte";

    let cardTitle = "Title goes here";
    let cardSubtitle = "Secondary subtitle text";
</script>
<Example title="EuiCard">
    <h6 class="section-title eui-u-mt-m">Showing card header title, subtitle and card content</h6>
    <EuiCard>
        <EuiCardHeader slot="cardHeader">
            <div slot="title">
                {cardTitle}
            </div>
            <div slot="subtitle">
                {cardSubtitle}
            </div>
        </EuiCardHeader>
        <div slot="cardContent">
            I am the content of the card container...
        </div>
    </EuiCard>

    <!--
    <h6 class="section-title">Displayed card sections: header - header body - content - footer</h6>
    Features :<br>
    <div class="eui-u-ml-m eui-u-mb-m">
        <li>header with title and subtitle with link on Title</li>
        <li>optional header-body with custom content</li>
        <li>optional card content style height set</li>
        <li>optional and custom footer's content with action buttons, icons, tooltip text and local menu</li>
    </div>

    <EuiCard>
        <EuiCardHeader>
            <EuiCardHeaderTitle>
                <a (click)="onCardTitleLinkClicked($event)">{{cardTitle}}</a>
            </EuiCardHeaderTitle>

            <EuiCardHeaderSubtitle>
                {{cardSubtitle}}
            </EuiCardHeaderSubtitle>

            <EuiCardHeader-body>
                <div class="eui-u-flex">
                    Header body...
                    <div class="eui-u-ml-auto">
                        <eui-chip euiSecondary euiRounded euiOutline euiSizeS><span euiLabel>Dog Breed</span></eui-chip>
                    </div>
                </div>
            </EuiCardHeader-body>
        </EuiCardHeader>

        <EuiCardContent [style]="cardContentStyle">
            The <strong>Shiba Inu</strong> is a Japanese breed of hunting dog. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan.
            A small, agile dog that copes very well with mountainous terrain and hiking trails, the <a href="https://en.wikipedia.org/wiki/Shiba_Inu" target="_blank">Shiba Inu</a> was originally bred for hunting.
            <p>It looks similar to and is often mistaken for other Japanese dog breeds like the Akita Inu or Hokkaido, but the Shiba Inu is a different breed with a distinct blood line, temperament, and smaller size than other Japanese dog breeds.</p>
        </EuiCardContent>

        <EuiCard-footer>
            <EuiCard-footer-action-buttons>
                <button euiButton euiPrimary>Action 1</button>
                <button euiButton euiSecondary>Action 2</button>
            </EuiCard-footer-action-buttons>

            <EuiCard-footer-action-icons>
                <button euiButton euiRounded euiIconButton euiBasicButton euiSecondary euiTooltip="Mark as favourite" aria-label="Mark as favourite">
                    <span euiIcon iconClass="eui-icon eui-icon-star"></span>
                </button>
                <button euiButton euiRounded euiIconButton euiBasicButton euiSecondary euiTooltip="Share" aria-label="Share">
                    <span euiIcon iconClass="eui-icon eui-icon-share"></span>
                </button>
            </EuiCard-footer-action-icons>

            <EuiCard-footer-menu-content [tooltipText]="'More options'">
                <div euiList>
                    <button euiListItem (click)="onMenuItemClicked($event, 1);">Menu item 1</button>
                    <button euiListItem (click)="onMenuItemClicked($event, 2);">Menu item 2</button>
                    <button euiListItem (click)="onMenuItemClicked($event, 3);">Menu item 3</button>
                </div>
            </EuiCard-footer-menu-content>
        </EuiCard-footer>
    </EuiCard>
    -->
    <Code value={`
        <EuiCard>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
            iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com
            modo consequat. Duis aute irure dolor in reprehenderit in voluptate veli
            t esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
            upidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum."
        </EuiCard>
    `}></Code>
</Example>