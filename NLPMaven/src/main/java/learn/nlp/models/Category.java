package learn.nlp.models;

public enum Category {
    DOCUMENT("Document", 1),
    SHORT_STORY("Short Story", 2),
    POEM("Poem", 3),
    OTHER("Other", 4);

    private final String displayValue;
    private final int cat_id;

    Category(String displayValue, int cat_id) {
        this.displayValue = displayValue;
        this.cat_id = cat_id;
    }

    public String getDisplayValue() {
        return displayValue;
    }

    public int getCat_id() {
        return cat_id;
    }
}
