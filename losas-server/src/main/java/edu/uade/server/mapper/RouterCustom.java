package edu.uade.server.mapper;

import net.sf.clipsrules.jni.Router;

import java.util.ArrayList;
import java.util.List;

public class RouterCustom implements Router {

    private final String name;
    private final int prioridad;
    private boolean ungotten;
    private int lastChar;

    private List<String> buffer;

    public RouterCustom(String name) {
        super();
        this.name = name;
        this.prioridad = 10;
        buffer = new ArrayList<>();
    }

    @Override
    public int getPriority() {
        return prioridad;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public boolean query(String routerName) {
        if (
            routerName.equals("stdout") ||
            routerName.equals("stdin") ||
            routerName.equals("wwarning") ||
            routerName.equals("werror") ||
            routerName.equals("wtrace") ||
            routerName.equals("wdialog") ||
            routerName.equals("wclips") ||
            routerName.equals("wdisplay")
        ){
            return true;
        }
        return false;
    }

    @Override
    public void write(String routerName, String printString) {
        buffer.add(printString);
    }

    @Override
    public int read(String routerName) {
        return 0;
    }

    @Override
    public int unread(String routerName, int theChar) {
        return 0;
    }

    @Override
    public void exit(boolean b) {

    }

    public List<String> getBuffer() {
        return buffer;
    }
}
