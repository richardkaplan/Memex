import { RibbonControllerInterface } from 'src/in-page-ui/ribbon/types'
import { SidebarControllerInterface } from 'src/in-page-ui/sidebar/types'
import { AnnotationsManagerInterface } from 'src/annotations/types'
import { InPageUI } from 'src/in-page-ui/shared-state'
import { HighlightInteractionInterface } from 'src/highlighting/types'
import AnnotationsManager from 'src/annotations/annotations-manager'

export interface ContentScriptRegistry {
    registerRibbonScript(main: RibbonScriptMain): Promise<void>
    registerSidebarScript(main: SidebarScriptMain): Promise<void>
    registerHighlightingScript(main: HighlightingScriptMain): Promise<void>
    registerTooltipScript(main: TooltipScriptMain): Promise<void>
}

export type SidebarScriptMain = (dependencies: {
    annotationsManager: AnnotationsManagerInterface
    currentTab: { id: number; url: string }
    highlighter: HighlightInteractionInterface
    getRemoteFunction: (name: string) => (...args: any[]) => Promise<any>
}) => Promise<{
    sidebarController: SidebarControllerInterface
}>

export type RibbonScriptMain = (options: {
    inPageUI: InPageUI
    highlighter: HighlightInteractionInterface
    annotationsManager: AnnotationsManager
    getRemoteFunction: (name: string) => (...args: any[]) => Promise<any>
    currentTab: { id: number; url: string }
}) => Promise<{
    ribbonController: RibbonControllerInterface
}>

export type HighlightingScriptMain = () => Promise<void>

export type TooltipScriptMain = () => Promise<void>