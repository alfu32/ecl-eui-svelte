
<!-- file: "src/examples/EuiDashboardButtonExample.svelte" -->
<script lang="ts">
    import Example from "../Example.svelte";
    import Code from "../Code.svelte";
    import EuiDashboardButton from "../lib/EuiDashboardButton.svelte";
    import EuiDashboardButtonLabel from "../lib/EuiDashboardButtonLabel.svelte";
    import EuiLabel from "../lib/EuiLabel.svelte";
    import EuiSubLabel from "../lib/EuiSubLabel.svelte";
</script>
<Example title="EuiDashboardButton" phase=fix>
    <h6 class="section-title">Main label</h6>
    <EuiDashboardButton mainLabel=99/>

    <h6 class="section-title">Main label /w label and subLabel</h6>
    <EuiDashboardButton label=label mainLabel=99 subLabel=sublabel/>
    <Code value={`
        <h6 class="section-title">Main label</h6>
        <EuiDashboardButton mainLabel=99/>
    
        <h6 class="section-title">Main label /w label and subLabel</h6>
        <EuiDashboardButton label=label mainLabel=99 subLabel=sublabel/>
    `}></Code>
    <hr/>
    <h6 class="section-title">colors</h6>
    <div class="example-section">
        <EuiDashboardButton kind=primary mainLabel=99 label=euiPrimary />
        <EuiDashboardButton kind=secondary mainLabel=99 label=euiSecondary />
        <EuiDashboardButton kind=info mainLabel=99 label=euiInfo />
        <EuiDashboardButton kind=success mainLabel=99 label=euiSuccess />
        <EuiDashboardButton kind=warning mainLabel=99 label=euiWarning />
        <EuiDashboardButton kind=danger mainLabel=99 label=euiDanger />
        <EuiDashboardButton kind=accent mainLabel=99 label=euiAccent />
    </div>
    <Code value={`
        <EuiDashboardButton kind=primary mainLabel=99 label=euiPrimary />
        <EuiDashboardButton kind=secondary mainLabel=99 label=euiSecondary />
        <EuiDashboardButton kind=info mainLabel=99 label=euiInfo />
        <EuiDashboardButton kind=success mainLabel=99 label=euiSuccess />
        <EuiDashboardButton kind=warning mainLabel=99 label=euiWarning />
        <EuiDashboardButton kind=danger mainLabel=99 label=euiDanger />
        <EuiDashboardButton kind=accent mainLabel=99 label=euiAccent />
    `}></Code>
    <hr/>
    <h6 class="section-title">size s</h6>
    <div class="example-section">
        <EuiDashboardButton size=s kind=primary mainLabel=99 label=euiPrimary />
        <EuiDashboardButton size=s kind=secondary mainLabel=99 label=euiSecondary />
        <EuiDashboardButton size=s kind=info mainLabel=99 label=euiInfo />
        <EuiDashboardButton size=s kind=success mainLabel=99 label=euiSuccess />
        <EuiDashboardButton size=s kind=warning mainLabel=99 label=euiWarning />
        <EuiDashboardButton size=s kind=danger mainLabel=99 label=euiDanger />
        <EuiDashboardButton size=s kind=accent mainLabel=99 label=euiAccent />
    </div>
    <Code value={`
        <EuiDashboardButton size=s kind=primary mainLabel=99 label=euiPrimary />
        <EuiDashboardButton size=s kind=secondary mainLabel=99 label=euiSecondary />
        <EuiDashboardButton size=s kind=info mainLabel=99 label=euiInfo />
        <EuiDashboardButton size=s kind=success mainLabel=99 label=euiSuccess />
        <EuiDashboardButton size=s kind=warning mainLabel=99 label=euiWarning />
        <EuiDashboardButton size=s kind=danger mainLabel=99 label=euiDanger />
        <EuiDashboardButton size=s kind=accent mainLabel=99 label=euiAccent />
    `}></Code>
    <hr/>
    <h6 class="section-title">size l</h6>
    <div class="example-section">
        <EuiDashboardButton size=l kind=primary mainLabel=99 label=euiPrimary />
        <EuiDashboardButton size=l kind=secondary mainLabel=99 label=euiSecondary />
        <EuiDashboardButton size=l kind=info mainLabel=99 label=euiInfo />
        <EuiDashboardButton size=l kind=success mainLabel=99 label=euiSuccess />
        <EuiDashboardButton size=l kind=warning mainLabel=99 label=euiWarning />
        <EuiDashboardButton size=l kind=danger mainLabel=99 label=euiDanger />
        <EuiDashboardButton size=l kind=accent mainLabel=99 label=euiAccent />
    </div>
    <Code value={`
        <EuiDashboardButton size=l kind=primary mainLabel=99 label=euiPrimary />
        <EuiDashboardButton size=l kind=secondary mainLabel=99 label=euiSecondary />
        <EuiDashboardButton size=l kind=info mainLabel=99 label=euiInfo />
        <EuiDashboardButton size=l kind=success mainLabel=99 label=euiSuccess />
        <EuiDashboardButton size=l kind=warning mainLabel=99 label=euiWarning />
        <EuiDashboardButton size=l kind=danger mainLabel=99 label=euiDanger />
        <EuiDashboardButton size=l kind=accent mainLabel=99 label=euiAccent />
    `}></Code>
    <div>There are many icons that you can use. For more information visit
        <div>/style-guide/components/eui-icon-svg eui-icon-svg</div>
        <div> or</div>
        <div>/style-guide/components/eui-icon eui-icon</div>
    </div>
    <div class="example-section">
        <EuiDashboardButton icon="eui-settings"/>
        <EuiDashboardButton iconClass="eui-icon-settings"/>
        <EuiDashboardButton size=l icon="eui-settings"/>
        <EuiDashboardButton size=l iconClass="eui-icon-settings"/>
        <EuiDashboardButton size=s icon="eui-settings"/>
        <EuiDashboardButton size=s iconClass="eui-icon-settings"/>
    </div>
</Example>
<style lang="scss">
    .example-section{
        align-items: flex-end;
        display: flex;
        width: 100%;
    }
</style>