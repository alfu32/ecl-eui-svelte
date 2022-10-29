
<script lang="ts">
    import type { T_EuiButtonKind } from "./T_EuiBadgeKind";
    import type { T_NullableProp } from "./T_NullableProp";



    export let disabled: T_NullableProp = null;
    export let outline: T_NullableProp = null;
    export let flat: T_NullableProp = null;
    export let kind: T_EuiButtonKind = null;
    export let chipsPosition: ('bottom'|'inside'|'top')='bottom'
    export let hasChips: T_NullableProp = null;
    export let matAutocompleteOrigin: string = 'ahem'
</script>
<div class="eui-autocomplete__container" data={matAutocompleteOrigin}>
    <div class="eui-autocomplete__wrapper eui-autocomplete__wrapper--{ chipsPosition }">
        <slot></slot>
        <!--
        {#if chipsPosition === 'bottom'}
        <template>
            <slot name="field"></slot>
        </template>
        {/if}

        {#if hasChips}
            <eui-chip-list
                #chipList
                chips={chips }
                isChipsDragAndDrop={isChipsDragAndDrop }
                isChipsRemovable={isChipsRemovable && !readonly}
                isChipsSorted={isChipsSorted }
                chipsSortOrder={chipsSortOrder }
                maxVisibleChipsCount={maxVisibleChipsCount }
                isMaxVisibleChipsOpened={isMaxVisibleChipsOpened }
                toggleLinkMoreLabel={toggleLinkMoreLabel }
                toggleLinkLessLabel={toggleLinkLessLabel }
                chipsLabelTruncateCount={chipsLabelTruncateCount }
                dragAndDropSourceName={dragAndDropSourceName }
                dragAndDropConnectedTo={dragAndDropConnectedTo }
                on:chipDropped={onChipDropped}
                on:chipDragStarted={onChipDragStarted}
                on:chipDragReleased={onChipDragReleased}
                on:chipRemove={onChipRemove}
                on:chiplistFocus={onChipListFocus}>
                <euiChipListAppendContent>
                    {#if chipsPosition === 'inside'}
                    <slot name="field"></slot>
                    {/if}
                </euiChipListAppendContent>
            </eui-chip-list>
        {/if}

        {#if chipsPosition === 'top' || !hasChips}
        <template>
            <slot name="field"></slot>
        </template>
        {/if}

        <ng-template #field>
            <span class="eui-autocomplete__field-wrapper">
                {#if !hasChips}
                    <input
                        euiClearable={!readonly && !isLoading && !isDisabled}
                        euiLoading={isLoading}
                        euiInputText
                        #autocompleteInput
                        #autocompleteInputTrigger
                        placeholder={ placeholder }
                        matAutocompleteDisabled={readonly}
                        formControl={autocompleteControl}
                        matAutocomplete={auto}
                        readonly={readonly}
                        aria-label={placeholder ? placeholder : 'Autocomplete Input Field'}
                        on:clear={onClear}
                        on:focusout={onFocusOut}
                        role="combobox"
                        aria-autocomplete="both"
                        aria-haspopup="true"
                        aria-controls="autocompleteId">
                {:else}
                    <input
                        euiClearable={!readonly && !isLoading && !isDisabled}
                        euiLoading={isLoading}
                        euiInputText
                        #autocompleteInput
                        #autocompleteInputTrigger
                        placeholder="{{ placeholder }}"
                        matAutocompleteDisabled={readonly}
                        formControl={autocompleteControl}
                        matAutocomplete={auto}
                        matAutocompleteConnectedTo={chipsPosition === 'inside' ? origin : null}
                        readonly={readonly}
                        aria-label={placeholder ? placeholder : 'Autocomplete Input Field'}
                        on:clear={onClear}
                        on:focusout={e => {onFocusOut(); addOnBlurHandler(e);}}
                        on:keydownenter)={addOnEnterHandler}
                        on:keydownbackspace)={onKeyDownBackspace}
                        role="combobox"
                        aria-autocomplete="both"
                        aria-haspopup="true"
                        aria-controls="autocompleteId">
                {/if}

                <mat-autocomplete
                    id={autocompleteId}
                    #auto="matAutocomplete"
                    panelWidth={panelWidth}
                    class={classList}
                    on:closed={onClose}
                    on:opened={onOpen}
                    on:optionSelected={onOptionSelected}
                    >

                    {#if groupBy}
                        {#each distinctOptionGroups as distinctOptionGroup}
                            {#if (groupedItems[distinctOptionGroup].async()).length > 0}
                            <mat-optgroup
                                [class.eui-autocomplete__optgroup--custom]="autocompleteOptGroupTemplate"
                                [label]="distinctOptionGroup">
                                {#if autocompleteOptGroupTemplate}
                                    <div class="eui-autocomplete__optgroup--custom-optgroup-wrapper">
                                        <ng-template [ngTemplateOutlet]="autocompleteOptGroupTemplate" [ngTemplateOutletContext]="{ $implicit: { label: distinctOptionGroup } }"></ng-template>
                                    </div>
                                {/if}
                                <HERE-YOU-ARE/>
                                <mat-option
                                    *ngFor="let groupedItem of groupedItems[distinctOptionGroup] | async; trackBy: trackByFn"
                                    [class]="groupedItem.typeClass ? 'mat-option eui-autocomplete__option eui-autocomplete__option--' + groupedItem.typeClass : 'mat-option eui-autocomplete__option'"
                                    [class.eui-autocomplete__option--custom]="autocompleteOptionTemplate"
                                    [value]="groupedItem">
                                    <span *ngIf="groupedItem.iconClass" class="{{ groupedItem.iconClass }}"></span>
                                    <ng-container *ngIf="!autocompleteOptionTemplate">
                                        {{ groupedItem.label }}
                                    </ng-container>
                                    <ng-container *ngIf="autocompleteOptionTemplate">
                                        <ng-template [ngTemplateOutlet]="autocompleteOptionTemplate" [ngTemplateOutletContext]="{ $implicit: groupedItem }"></ng-template>
                                    </ng-container>
                                </mat-option>
                            </mat-optgroup>
                            {/if}
                        {/each}
                    {:else}
                        <mat-option
                            *ngFor="let autocompleteOption of autocompleteOptions | async; trackBy: trackByFn"
                            [class]="autocompleteOption.typeClass ? 'mat-option eui-autocomplete__option eui-autocomplete__option--' + autocompleteOption.typeClass : 'mat-option eui-autocomplete__option'"
                            [class.eui-autocomplete__option--custom]="autocompleteOptionTemplate"
                            [value]="autocompleteOption">
                            <span *ngIf="autocompleteOption.iconClass" class="{{ autocompleteOption.iconClass }}"></span>
                            <ng-container *ngIf="!autocompleteOptionTemplate">
                                {{ autocompleteOption.label }}
                            </ng-container>
                            <ng-container *ngIf="autocompleteOptionTemplate">
                                <ng-template [ngTemplateOutlet]="autocompleteOptionTemplate" [ngTemplateOutletContext]="{ $implicit: autocompleteOption }"></ng-template>
                            </ng-container>
                        </mat-option>
                    {/if}
                </mat-autocomplete>
            </span>
        </ng-template>
-->
    </div>
</div>
<style lang="scss">
    @import 'base';
    @import 'autocomplete';
    @import 'autocomplete.states';
</style>