package learn.nlp.models;

public enum Category {
    DOCUMENT("Document"),
    SHORT_STORY("Short Story");

    private final String displayValue;

    Category(String displayValue) {
        this.displayValue = displayValue;
    }

    public String getDisplayValue() {
        return displayValue;
    }
}
