
<!-- file: "src/examples/EuiIconExample.svelte" -->
<script lang="ts">
    import EuiButton from "../lib/EuiButton.svelte";
    import EuiLabel from "../lib/EuiLabel.svelte";
    import Example from "../Example.svelte";
    import Code from "../Code.svelte";
    import EuiIcon from "../lib/EuiIcon.svelte";
</script>
<Example title="EuiIcon" phase="work">
    <p>Use the <code>iconClass</code> input option to display the desired icon :</p>

    <pre>
        &lt;eui-icon <strong>iconClass</strong>="eui-icon-home"&gt;&lt;/eui-icon&gt;
    </pre>

    <p>or you can also use the classic <code>class="font-base font-name"</code> within a span element for example :</p>

    <pre>
        &lt;span <strong>class="eui-icon eui-icon-home"</strong>&gt;&lt;span&gt;
    </pre>

    Examples :<br>
    <EuiIcon icon="eui-icon-home-o" ariaLabel="Home Icon"></EuiIcon>
    <EuiIcon icon="eui-icon-bank" ariaLabel="Bank Icon"></EuiIcon>
    <EuiIcon icon="eui-icon-bell" ariaLabel="Bell Icon"></EuiIcon>
    <EuiIcon icon="eui-icon-ecl-global" ariaLabel="Global Icon"></EuiIcon>
    <EuiIcon icon="eui-icon-ecl-dashboard" ariaLabel="Dashboard Icon"></EuiIcon>
    <EuiIcon icon="eui-icon-delete" ariaLabel="Delete Icon"></EuiIcon>
    <EuiIcon icon="eui-icon-eur" ariaLabel="Euro Icon"></EuiIcon>
    <EuiIcon icon="eui-icon-info-circle" ariaLabel="Info Icon"></EuiIcon>
    <EuiIcon icon="eui-icon-person" ariaLabel="Peson Icon"></EuiIcon>
    <EuiIcon icon="eui-icon-filetype-pdf" colored ariaLabel="Pdf Icon"></EuiIcon>
    <hr />

    <p>
        eUI icons are designed in a 24x24 pixels matrix.
        When using next to a label, resize it to defaut <code>euiSizeM</code> for viewing at 100% baseline scale for best accuracy and alignment,
    </p>
    <EuiIcon size="m" icon="eui-icon-home-o"></EuiIcon> eui-icon-home-o <br>
    <EuiIcon size="m" icon="eui-icon-bank"></EuiIcon> eui-icon-bank <br>
    <EuiIcon size="m" icon="eui-icon-bell"></EuiIcon> eui-icon-bell <br>
    <EuiIcon size="m" icon="eui-icon-ecl-global"></EuiIcon> eui-icon-ecl-global <br>
    <EuiIcon size="m" icon="eui-icon-dashboard"></EuiIcon> eui-icon-dashboard <br>
    <EuiIcon size="m" icon="eui-icon-star"></EuiIcon> eui-icon-star <br>
    <hr />

    <p>
        or use within a <code>eui-u-flex</code> when using custom sizes.
    </p>
    <div class="eui-u-flex">
        <EuiIcon icon="eui-icon-home-o"></EuiIcon> eui-icon-home-o <br>
    </div>
    <div class="eui-u-flex">
        <EuiIcon icon="eui-icon-star"></EuiIcon> eui-icon-star <br>
    </div>
    <div class="eui-u-flex">
        <EuiIcon icon="eui-icon-filetype-pdf" colored ></EuiIcon> eui-icon-filetype-pdf <br>
    </div>
    <hr />
    <div class="eui-u-flex flex-wrap">
        <div class="col-md-3">
            <h6 class="section-title mt-0">euiPrimary</h6>
            <EuiIcon kind="primary" size="3x"></EuiIcon>
        </div>
        <div class="col-md-3">
            <h6 class="section-title mt-0">euiSecondary</h6>
            <EuiIcon kind="secondary" size="3x"></EuiIcon>
        </div>
        <div class="col-md-3">
            <h6 class="section-title mt-0">euiInfo</h6>
            <EuiIcon kind="info" size="3x"></EuiIcon>
        </div>
        <div class="col-md-3">
            <h6 class="section-title mt-0">euiSuccess</h6>
            <EuiIcon kind="success" size="3x"></EuiIcon>
        </div>
        <div class="col-md-3">
            <h6 class="section-title mt-0">euiWarning</h6>
            <EuiIcon kind="warning" size="3x"></EuiIcon>
        </div>
        <div class="col-md-3">
            <h6 class="section-title mt-0">euiDanger</h6>
            <EuiIcon kind="danger" size="3x"></EuiIcon>
        </div>
        <div class="col-md-3">
            <h6 class="section-title mt-0">euiAccent</h6>
            <EuiIcon kind="accent" size="3x"></EuiIcon>
        </div>
    </div>
    <hr />
    <h6 class="section-title eui-u-mt-s">Loading icon only with isLoading=true</h6>
    <EuiIcon isLoading></EuiIcon>

    <br>

    <h6 class="section-title">Composition within a button</h6>
    <div class="eui-u-flex flex-wrap">
        <div class="eui-u-mb-s eui-u-mr-s">
            <EuiButton isLoading>
                <EuiLabel>Loading default...</EuiLabel>
            </EuiButton>
        </div>
        <div class="eui-u-mb-s eui-u-mr-s">
            <EuiButton kind="primary" isLoading>
                <EuiLabel>Loading...</EuiLabel>
            </EuiButton>
        </div>
        <div class="eui-u-mb-s eui-u-mr-s">
            <EuiButton kind="secondary" isLoading>
                <EuiIcon icon="eui-icon-list"></EuiIcon>
                <EuiLabel>Loading secondary...</EuiLabel>
            </EuiButton>
        </div>
        <div class="eui-u-mb-s eui-u-mr-s">
            <EuiButton kind=info isLoading>
                <EuiIcon icon="eui-icon-list"></EuiIcon>
                <EuiLabel>Loading info...</EuiLabel>
            </EuiButton>
        </div>
        <div class="eui-u-mb-s eui-u-mr-s">
            <EuiButton kind="success" isLoading>
                <EuiIcon icon="eui-icon-list"></EuiIcon>
                <EuiLabel>Loading success...</EuiLabel>
            </EuiButton>
        </div>
        <div class="eui-u-mb-s eui-u-mr-s">
            <EuiButton kind="warning" isLoading>
                <EuiIcon icon="eui-icon-list"></EuiIcon>
                <EuiLabel>Loading warning...</EuiLabel>
            </EuiButton>
        </div>
        <div class="eui-u-mb-s eui-u-mr-s">
            <EuiButton kind="danger" isLoading>
                <EuiLabel>An error occurred. Retry...</EuiLabel>
                <EuiIcon icon="eui-icon-angle-right"></EuiIcon>
            </EuiButton>
        </div>
        <div class="eui-u-mb-s eui-u-mr-s">
            <EuiButton kind="accent" isLoading>
                <EuiLabel>Please wait... Skip</EuiLabel>
                <EuiIcon icon="eui-icon-angle-right"></EuiIcon>
            </EuiButton>
        </div>
        <hr />
    </div>
    <Code value={`
        <EuiChip>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
            iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com
            modo consequat. Duis aute irure dolor in reprehenderit in voluptate veli
            t esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
            upidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum."
        </EuiChip>
    `}></Code>
</Example>